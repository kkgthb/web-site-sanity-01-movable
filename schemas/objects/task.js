import icon from '../../static/icons/check-box-outline-blank'

export default {
  name: 'task',
  title: 'Task For Me',
  type: 'object',
  icon,
  fields: [
    {
      name: 'task',
      title: 'Task',
      type: 'string',
      required: true,
    },
    {
      name: 'done',
      title: 'Done?',
      type: 'boolean',
      required: true,
    },
    {
      name: 'how',
      title: 'How?',
      type: 'string',
      required: false,
    },
  ],
}
