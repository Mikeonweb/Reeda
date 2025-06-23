import { defineType } from "sanity";

import { defineField } from "sanity";

export const startup = defineType({
  // schema definition for the startup document
  name: "startup",
  title: "Startup",
  type: "document",

  fields: [
     defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: "author",
      type: "reference",
      to: {type: 'author'}
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) => Rule.min(1).max(20).required().error('Please enter a category')
    }),
     defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required()
    }),
     defineField({
      name: "pitch",
      type: "markdown", //to us markdown you need to install the plugin, run npm install sanitiy-plugin-markdown on your terminal, then import it in sanity.config.ts then call it as a function as the second part of the plugins array
    }),
  ],

  
});
