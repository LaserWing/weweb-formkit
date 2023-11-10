export default {
  editor: {
    label: {
      en: "My Element",
    },
  },
  properties: {
    ww_title: {
      label: {
        en: "Title",
      },
      type: "String",
      defaultValue: "#Hello World",
      bindable: true,

    },
    ww_schema: {
      label: {
        en: "Schema",
      },
      type: "Array",
      defaultValue:  [
        {
          $formkit: 'text',
          name: 'username',
          label: 'Username',
          validation: 'required',
          placeholder: 'Enter your username',
        },
        {
          $formkit: 'password',
          name: 'password',
          label: 'Password',
          validation: 'required|length:6',
          placeholder: 'Enter your password',
          validationMessages: {
            required: 'Password is required',
            length: 'Password must be at least 6 characters long'
          }
        },
      ],
      bindable: true,
    },
  },
};
