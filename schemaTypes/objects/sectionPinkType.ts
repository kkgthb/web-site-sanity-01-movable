import { defineField, defineType } from "sanity";
import { HeartIcon } from "@sanity/icons";

export const sectionPinkType = defineType({
  name: "sectionPink",
  title: "Section - Pink",
  type: "object",
  icon: HeartIcon,
  fields: [
    defineField({
      name: "say",
      title: "Say",
      description: 'What text would you like in this "pink" section?',
      type: "string",
    }),
  ],
  preview: {
    select: {
      say: "say",
    },
    prepare({ say }) {
      return {
        title: say,
      };
    },
  },
});
