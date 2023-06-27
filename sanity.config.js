import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./schemas/schema";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  title: "portfolio2.0",
  projectId: "kfie2jqu",
  dataset: "production",
  plugins: [deskTool(), visionTool(), codeInput()],
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
