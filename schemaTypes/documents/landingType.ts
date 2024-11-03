import { defineField, defineType } from "sanity";
import { ThListIcon } from "@sanity/icons";

export const landingType = defineType({
  name: "landing",
  title: "Landing Page",
  type: "document",
  icon: ThListIcon,
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      description:
        "If not happy with what the system generated, you can hand-edit it here",
      type: "slug",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "template",
      title: "Template",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        { type: "sectionBlue" },
        { type: "sectionPink" },
        { type: "sectionTaskList" },
      ],
    }),
  ],
  preview: {
    select: {
      slug: "slug",
      template: "template",
    },
    prepare({ slug, template }) {
      return {
        title: `slug: ${slug.current}`,
        subtitle: `frontend template: ${template}`,
      };
    },
  },
});
