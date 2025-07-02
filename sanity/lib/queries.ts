import {defineQuery} from 'next-sanity'


// startup card display query
// This query fetches all startups with their details, ordered by creation date. 
// It allows for dynamic searching of startups based on user input.
export const startup_query = defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
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

// This query fetches all startups with their details, ordered by creation date. here  i added "| order(_createdAt desc)" command to ensure that the most recent startups appear first/on-top. 
// every thing enclosed by backticks is a groq query, it was written in the groq query language, which is used to query data from Sanity's content lake.

// what his part of code !defined($search) || title match $search || category match $search || author->name match $search is doing is it checks if the search parameter is not defined, or if it matches the title, category, or author's name of the startup. This allows for dynamic searching of startups based on user input.


// startup details query
// This query fetches the details of a specific startup based on its ID.
// It retrieves the startup's ID, type, title, description, slug, creation date, author details, views, category, image, and pitch.
export const details_query = defineQuery(`*[_type == "startup" && _id == $id][0]{
 _id,
_type,
title,
description,
slug,
_createdAt,
author ->{author_id, name, username,  image, bio},
views,
category,
image,
pitch
}`)