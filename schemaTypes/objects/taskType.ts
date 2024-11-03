import { defineField, defineType } from "sanity";
import { TaskIcon, CircleIcon, CheckmarkCircleIcon } from "@sanity/icons";

export const taskType = defineType({
  name: "task",
  title: "Task For Me",
  type: "object",
  icon: TaskIcon,
  fields: [
    defineField({
      name: "task",
      title: "Task",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "done",
      title: "Done?",
      type: "boolean",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "how",
      title: "How?",
      type: "string",
    }),
  ],
  preview: {
    select: {
      task: "task",
      done: "done",
    },
    prepare({ task, done }) {
      return {
        title: task,
        media: done ? CheckmarkCircleIcon : CircleIcon,
      };
    },
  },
});
