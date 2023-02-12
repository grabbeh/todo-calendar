/*import { renderToString } from 'react-dom/server';
import algoliasearch from 'algoliasearch/lite';
import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import {
  InstantSearch,
  InstantSearchSSRProvider,
} from 'react-instantsearch-hooks-web';
import { getServerState } from 'react-instantsearch-hooks-server';
import { history } from 'instantsearch.js/cjs/lib/routers/index.js';

import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';

const searchClient = algoliasearch('undefined', 'undefined');

export const loader: LoaderFunction = async ({ request }) => {
  const serverUrl = request.url;
  const serverState = await getServerState(
    <Search serverUrl={serverUrl} />,
    { renderToString }
  );

  return json({
    serverState,
    serverUrl,
  });
};

type SearchProps = {
  serverState?: InstantSearchServerState;
  serverUrl?: string;
};

function Search({ serverState, serverUrl }: SearchProps) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={searchClient}
        indexName="YourIndexName"
        routing={{
          router: history({
            getLocation() {
              if (typeof window === 'undefined') {
                return new URL(serverUrl!) as unknown as Location;
              }

              return window.location;
            },
          }),
        }}
      >
     
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

export default function HomePage() {
  const { serverState, serverUrl } = useLoaderData() as SearchProps;

  return <Search serverState={serverState} serverUrl={serverUrl} />;
}
*/
