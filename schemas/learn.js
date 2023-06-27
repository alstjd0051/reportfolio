export default {
  name: "learn",
  title: "Learn",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "code" }],
    },
    {
      name: "tag",
      title: "Tag",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
