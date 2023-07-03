export default {
  name: "react",
  title: "React",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
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
    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
};
