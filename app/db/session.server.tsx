import bcrypt from 'bcryptjs'
import { createCookieSessionStorage, redirect } from '@remix-run/node'
import { addUser, fetchUser } from './index.server'

type LoginForm = {
	email: string
	password: string
}

export async function register({ email, password }: LoginForm) {
	const existingUser = await fetchUser(email)
	if (existingUser) {
		throw new Error('Existing user')
	} else {
		const passwordHash = await bcrypt.hash(password, 10)
		const user = await addUser({ email, passwordHash })
		return { email: user.email }
	}
}

export async function login({ email, password }: LoginForm) {
	const user = await fetchUser(email)
	if (!user) return null
	const isCorrectPassword = await bcrypt.compare(password, user.passwordHash)
	if (!isCorrectPassword) return null
	return { email }
}

const storage = createCookieSessionStorage({
	cookie: {
		name: 'RJ_session',
		// normally you want this to be `secure: true`
		// but that doesn't work on localhost for Safari
		// https://web.dev/when-to-use-local-https/
		secure: process.env.NODE_ENV === 'production',
		secrets: [process.env.SESSION_SECRET || 'temporary_secret_for_boot'],
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 30,
		httpOnly: true
	}
})

function checkSessionSecret() {
	if (!process.env.SESSION_SECRET) {
		console.warn(
			'SESSION_SECRET environment variable is not set! Using fallback secret.'
		)
		// We no longer throw here to avoid Lambda initialization crashes.
		// Remix will use the fallback secret provided in createCookieSessionStorage.
	}
}

async function getUserSession(request: Request) {
	checkSessionSecret()
	return storage.getSession(request.headers.get('Cookie'))
}

export async function getUserEmail(request: Request) {
	const session = await getUserSession(request)
	const email = session.get('email')
	if (!email || typeof email !== 'string') return null
	return email
}

export async function requireUserEmail(
	request: Request,
	redirectTo: string = new URL(request.url).pathname
) {
	const session = await getUserSession(request)
	const email = session.get('email')
	if (!email || typeof email !== 'string') {
		const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
		throw redirect(`/login?${searchParams}`)
	}
	return email
}

export async function getUser(request: Request) {
	const email = await getUserEmail(request)
	if (typeof email !== 'string') {
		return null
	}

	try {
		const user = await fetchUser(email)
		return user
	} catch {
		throw logout(request)
	}
}

export async function logout(request: Request) {
	const session = await getUserSession(request)
	return redirect('/login', {
		headers: {
			'Set-Cookie': await storage.destroySession(session)
		}
	})
}

export async function createUserSession(email: string, redirectTo: string) {
	checkSessionSecret()
	const session = await storage.getSession()
	session.set('email', email)
	return redirect(redirectTo, {
		headers: {
			'Set-Cookie': await storage.commitSession(session)
		}
	})
}
