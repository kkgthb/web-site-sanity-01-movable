import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";
import { structureTool } from "sanity/structure";
import { projectId, dataset } from "./environment";

export default defineConfig({
  name: "default",
  title: "Movable Blue Pink Todo",
  projectId: projectId,
  dataset: dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
