export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "document",
      of: [{ type: "reference" }],
      fields: [
        {
          title: "Comments",
          name: "comments",
          type: "array",
          of: [
            {
              title: "Comments",
              name: "comment",
              type: "document",
              fields: [
                {
                  title: "Author",
                  name: "author",
                  type: "reference",
                  to: [{ type: "user" }],
                },
                {
                  name: "email",
                  title: "Email",
                  type: "string",
                },
                {
                  title: "Comment",
                  name: "comment",
                  type: "string",
                },
                {
                  name: "message",
                  title: "Message",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
