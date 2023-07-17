export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "map",
      title: "Map",
      type: "document",
      fields: [
        {
          name: "location",
          type: "geopoint",
        },
        {
          name: "google",
          type: "Map",
        },
      ],
    },
  ],
};
