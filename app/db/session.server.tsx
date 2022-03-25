import bcrypt from 'bcryptjs'
import { createCookieSessionStorage, redirect } from 'remix'
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

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
	throw new Error('SESSION_SECRET must be set')
}

const storage = createCookieSessionStorage({
	cookie: {
		name: 'RJ_session',
		// normally you want this to be `secure: true`
		// but that doesn't work on localhost for Safari
		// https://web.dev/when-to-use-local-https/
		secure: process.env.NODE_ENV === 'production',
		secrets: [sessionSecret],
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 30,
		httpOnly: true
	}
})

function getUserSession(request: Request) {
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
	const session = await storage.getSession()
	session.set('email', email)
	return redirect(redirectTo, {
		headers: {
			'Set-Cookie': await storage.commitSession(session)
		}
	})
}
