import { hydrateRoot } from 'react-dom/client'
import { RemixBrowser } from '@remix-run/react'

if (process.env.NODE_ENV !== 'production') {
	require('react-dom').hydrate(<RemixBrowser />, document)
} else {
	hydrateRoot(document, <RemixBrowser />)
}
