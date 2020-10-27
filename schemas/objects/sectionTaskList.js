import icon from '../../static/icons/tasks'

export default {
  name: 'sectionTaskList',
  title: 'Section - Task List',
  type: 'object',
  icon,
  fields: [
    {
      name: 'accomplishments',
      title: 'Tasks/accomplishments',
      type: 'array',
      of:[{type:'task'}],
    },
  ],
}
