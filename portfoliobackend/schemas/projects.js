export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },

    {
      name: 'stack_a',
      title: 'Stack_a',
      type: 'string',
    },
    {
      name: 'stack_b',
      title: 'Stack_b',
      type: 'string',
    },
    {
      name: 'stack_c',
      title: 'Stack_c',
      type: 'string',
    },
    {
      name: 'stack_d',
      title: 'Stack_d',
      type: 'string',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'string',
    },
    {
      name: 'live',
      title: 'Live',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
}
