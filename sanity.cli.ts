import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./environment";

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  },
});
