import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./schemas/schema";
import deskStructure from "./schemas/deskStructure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  title: "portfolio2.0",
  projectId: "kfie2jqu",
  dataset: "production",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    types: schema,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) => templateItem.templateId != "settings"
        );
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === "settings") {
        return prev.fill(
          ({ action }) => !["unpublish", "delete", "duplicate"].includes(action)
        );
      }
      return prev;
    },
  },
});
