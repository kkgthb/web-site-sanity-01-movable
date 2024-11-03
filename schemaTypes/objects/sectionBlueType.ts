import { defineField, defineType } from "sanity";
import { RobotIcon } from "@sanity/icons";

export const sectionBlueType = defineType({
  name: "sectionBlue",
  title: "Section - Blue",
  type: "object",
  icon: RobotIcon,
  fields: [
    defineField({
      name: "mention",
      title: "Mention",
      description: 'What text would you like in this "blue" section?',
      type: "string",
    }),
  ],
  preview: {
    select: {
      mention: "mention",
    },
    prepare({ mention }) {
      return {
        title: mention,
      };
    },
  },
});
