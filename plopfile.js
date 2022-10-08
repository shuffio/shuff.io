module.exports = function (plop) {
  /**
   * name and description of our template
   * @todo: replace with addMany
   * @see: https://plopjs.com/documentation/#addmany
   * */
  plop.setGenerator("", {
    description: "Creates a module",

    prompts: [
      {
        type: "list",
        name: "location",
        message: "Select type",
        default: "modules",
        choices: [
          { name: "primitive", value: "primitives" },
          { name: "component", value: "components" },
          { name: "module", value: "modules" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "Provide a name in PascalCase:",
      },
    ],

    actions: [
      {
        type: "add",
        path: "ui/{{location}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "ui/templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "ui/{{location}}/{{pascalCase name}}/index.ts",
        templateFile: "ui/templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "ui/{{location}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "ui/templates/component.stories.tsx.hbs",
      },
      // {
      //   type: "add",
      //   path: "tests/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
      //   templateFile: "templates/modules/test.tsx.hbs",
      // },
      {
        type: "append",
        path: "ui/{{location}}/index.ts",
        pattern: `/* DO_NOT_EDIT_IMPORT_MODULE */`,
        template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "ui/{{location}}/index.ts",
        pattern: `/* DO_NOT_EDIT_EXPORT_MODULE */`,
        template: `  {{pascalCase name}},`,
      },
    ],
  });
};
