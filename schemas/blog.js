export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "total",
      title: "Total",
      type: "object",
      of: [{}, { type: "reference", to: { type: "flutter" } }],
    },
  ],
};
