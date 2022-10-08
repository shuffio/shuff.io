module.exports = function (plop) {
  /* name and description of our template */
  plop.setGenerator("module", {
    description: "Creates a module",

    prompts: [
      {
        type: "list",
        name: "location",
        message: "Select type",
        default: "modules",
        choices: [
          { name: "Primitive", value: "primitives" },
          { name: "Component", value: "components" },
          { name: "Module", value: "modules" },
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
        templateFile: "ui/modules/templates/Module.tsx.hbs",
      },
      {
        type: "add",
        path: "ui/{{location}}/{{pascalCase name}}/index.ts",
        templateFile: "ui/modules/templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "ui/{{location}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "ui/modules/templates/Module.stories.tsx.hbs",
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
