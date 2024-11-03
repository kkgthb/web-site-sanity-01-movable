import { defineField, defineType } from "sanity";
import { TaskIcon } from "@sanity/icons";

export const sectionTaskListType = defineType({
  name: "sectionTaskList",
  title: "Section - Task List",
  type: "object",
  icon: TaskIcon,
  fields: [
    defineField({
      name: "accomplishments",
      title: "Tasks/Accomplishments",
      description: "What is on your to-do/did list?",
      type: "array",
      of: [{ type: "task" }],
    }),
  ],
});
