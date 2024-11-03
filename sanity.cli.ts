import { defineCliConfig } from "sanity/cli";
import { projectId, dataset, studioHost } from "./environment";

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
    studioHost: studioHost,
  },
});
