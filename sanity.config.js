import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./schemas/schema";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { markdownSchema } from "sanity-plugin-markdown/next";
import { colorInput } from "@sanity/color-input";
import { table } from "@sanity/table";
import { googleMapsInput } from "@sanity/google-maps-input";

export default defineConfig({
  title: "portfolio2.0",
  projectId: "kfie2jqu",
  dataset: "production",
  plugins: [
    deskTool(),
    visionTool(),
    codeInput(),
    markdownSchema(),
    colorInput(),
    table(),
    googleMapsInput({
      apiKey: "AIzaSyCngT-hem5BT5pKR93KpecrkjmIkMZL8M4",
    }),
  ],
  tools: (prev, context) => {
    const isAdmin = context.currentUser.roles.find(
      ({ name }) => name === "administrator"
    );
    if (isAdmin) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    types: schema,
  },
});
