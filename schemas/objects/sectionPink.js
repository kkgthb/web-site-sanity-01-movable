export default {
  name: 'sectionPink',
  title: 'Pink Section',
  type: 'object',
  fields: [
    {
      name: 'say',
      title: 'What would you like to say?',
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