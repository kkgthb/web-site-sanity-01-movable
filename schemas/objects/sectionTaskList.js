export default {
  name: 'sectionTaskList',
  title: 'Tasks Section',
  type: 'object',
  fields: [
    {
      name: 'accomplishments',
      title: 'Tasks/accomplishments',
      type: 'array',
      of:[{type:'task'}],
    },
  ],
  preview: {
    select: {
      accomplishments: 'accomplishments'
    },
    prepare(selection) {
      const {accomplishments} = selection
      return {
        title: `${JSON.stringify(accomplishments.map(accomplishment => accomplishment['task']))}`,
      }
    }
  }
}