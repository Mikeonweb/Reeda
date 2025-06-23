import {defineQuery} from 'next-sanity'

export const startup_query = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
 _id,
 _type, 
title,
description,
slug,
_createdAt,
author ->{author_id, name, image, bio},
views,
category,
image
}`)

// This query fetches all startups with their details, ordered by creation date. here  i added "| order(_createdAt desc)" command to ensure that the most recent startups appear first/on top. 
// every thing enclosed by backticks is a groq query, it was written in the groq query language, which is used to query data from Sanity's content lake.
