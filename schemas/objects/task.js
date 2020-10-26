export default {
  name: 'task',
  title: 'Individual Task',
  type: 'object',
  fields: [
    {
      name: 'task',
      title: 'What is the task?',
      type: 'string'
    },
    {
      name: 'done',
      title: 'Did you do it?',
      type: 'boolean'
    },
    {
      name: 'how',
      title: 'How should/did you do it?',
      type: 'string'
    },
  ],
  preview: {
    select: {
      task: 'task'
    },
    prepare(selection) {
      const {task} = selection
      return {
        title: task,
      }
    }
  }
}