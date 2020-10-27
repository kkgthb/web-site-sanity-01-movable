import icon from '../../static/icons/bluetooth'

export default {
  name: 'sectionBlue',
  title: 'Section - Blue',
  type: 'object',
  icon,
  fields: [
    {
      name: 'mention',
      title: 'Mention',
      description: 'What text would you like in this "blue" section?',
      type: 'string'
    },
  ],
  preview: {
    select: {
      mention: 'mention',
    },
    prepare(selection) {
      const {mention} = selection
      return {
        title: mention,
      }
    }
  }
}
