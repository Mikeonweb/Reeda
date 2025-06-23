// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.

import "server-only"; // This import is necessary to ensure that the code runs in a server environment, as the live content API requires server-side rendering capabilities.
import { defineLive } from "next-sanity";
import { client } from './client'

// export const { sanityFetch, SanityLive } = defineLive({ 
//   client: client.withConfig({ 
//     // Live content is currently only available on the experimental API
//     // https://www.sanity.io/docs/api-versioning
//     apiVersion: 'vX' 
//   }) 
// });



// Creating live preview instance
const live = defineLive({
  client: client.withConfig({
    apiVersion: 'vX',
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: 'previewDrafts'
  })
});

// Exporting the live preview component
export const SanityLive = live.SanityLive;

// Creatting a properly typed fetch function
export async function sanityFetch<T = any>(
  query: string, 
  params?: Record<string, unknown>
): Promise<T> {
  const result = await live.sanityFetch({ query, params });
  return result.data as T;
}


