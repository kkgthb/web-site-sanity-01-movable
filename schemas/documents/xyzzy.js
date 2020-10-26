import icon from '../../static/icons/note-add'

export default {
  name: 'xyzzy',
  title: 'X y zz y',
  type: 'document',
  icon,
  fields: [
    {
      name: 'template',
      title: 'Template',
      type: 'string',
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
        title: `${template}`,
      }
    }
  }
}
