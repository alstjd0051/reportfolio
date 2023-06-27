export default {
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
