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
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            annotations: [{ name: "color", title: "Color", type: "color" }],
          },
        },
        {
          type: "image",
        },
        {
          type: "code",
        },
      ],
    },
    {
      name: "createdAt",
      title: "Created at",
      type: "date",
    },
    // {
    //   name: "category",
    //   title: "Category",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "skill" } }],
    // },
  ],
};
