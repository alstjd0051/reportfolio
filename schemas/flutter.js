export default {
  name: "flutter",
  title: "Flutter",
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
        { type: "block" },
        { type: "image" },
        {
          type: "code",
          options: {
            language: "dart",
            languageAlternatives: [
              { title: "dart", value: "dart" },
              { title: "markdown", value: "markdown" },
            ],
          },
        },
      ],
    },
    {
      name: "createdAt",
      title: "Created at",
      type: "date",
    },
  ],
};
