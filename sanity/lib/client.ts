import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation, this way new content will be fetched on every request and available immediately on page refresh. to make content appear immediately without need to refresh page i will be making use of sanity's "live content API", which allows you to subscribe to real-time updates of your content.


  // if you set to false, it will always fetch the latest data from Sanity on every request
  // if you set to true, it will cache the data and serve it from the CDN, which is faster but may not reflect the latest changes immediately.
})
// This client is used to fetch data from Sanity's content lake, allowing you to query and manipulate your content easily.
