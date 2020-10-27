import icon from '../../static/icons/arrows-alt'

export default {
  name: 'landing',
  title: 'Landing Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'template',
      title: 'Template',
      type: 'string',
      required: true,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      required: true,
      description: 'If not happy with what the system generated, you can hand-edit it here'
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'sectionBlue'}, {type: 'sectionPink'}, {type: 'sectionTaskList'}],
    },
  ],
  preview: {
    select: {
      slug: 'slug',
      template: 'template',
    },
    prepare(selection) {
      const {slug, template} = selection
      return {
        title: `${slug.current} [${template}]`,
      }
    }
  }
}
