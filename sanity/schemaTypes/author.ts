import { defineType } from "sanity";
import { MdPerson } from "react-icons/md";
import { defineField } from "sanity";

export const author = defineType({
    // schema definition for the author document
  name: "author",
  title: "Author",
  type: "document",
  icon: MdPerson,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],

  preview: {
    // preview configuration for the author document, allows to select author by name
    select: {
      title: "name",
    },
  },
});
