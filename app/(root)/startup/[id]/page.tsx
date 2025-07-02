import React from "react";
import { client } from "@/sanity/lib/client";
import { details_query } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

// This is the page component for the dynamic route /startup/[id].
// id folder is a dynamic route, which means it will match any URL segment after /startup/ and treat it as an ID.

// I will be accesing the ID  via the `params` object in the `page` function. {params}: {params: {id: string} is used to destructure the `params` object to get the `id` parameter, {params: {id: string} is a TypeScript type annotation that specifies the structure of the `params` object, indicating that it contains an `id` property of type `string`.

// This page can be used to display details about a specific startup based on the ID.

export const experimental_ppr = true;
const page = async ({params}: {params: {id: string}}) => {
  const id = params.id;

  const post = await client.fetch(details_query, {id})
  if (!post) return notFound();
  return (
    <>
      <h1 className="text-3xl">{post.title}</h1>
    </>
  );
};

export default page;
