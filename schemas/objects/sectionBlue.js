export default {
  name: 'sectionBlue',
  title: 'Blue Section',
  type: 'object',
  fields: [
    {
      name: 'mention',
      title: 'What would you like to mention?',
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