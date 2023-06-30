export default {
  name: "nextjs",
  title: "Nextjs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sumbnail",
      title: "Sumbnail",
      type: "image",
    },
    {
      name: "code",
      title: "Code",
      type: "array",
      of: [{ type: "block" }, { type: "image" }, { type: "code" }],
    },
    {
      name: "createdAt",
      title: "Created at",
      type: "date",
    },
  ],
};
