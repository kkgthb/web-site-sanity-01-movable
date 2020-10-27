import icon from '../../static/icons/cake'

export default {
  name: 'sectionPink',
  title: 'Section - Pink',
  type: 'object',
  icon,
  fields: [
    {
      name: 'say',
      title: 'Say',
      description: 'What text would you like in this "pink" section?',
      type: 'string'
    },
  ],
  preview: {
    select: {
      say: 'say'
    },
    prepare(selection) {
      const {say} = selection
      return {
        title: say,
      }
    }
  }
}
