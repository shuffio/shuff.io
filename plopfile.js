const uiCategories = ["primitives", "components", "modules"];
const uiTypes = ["typography"];

const generateUiCategories = (categories, trimLastLetter = false) =>
  categories.map((category) => ({
    name: trimLastLetter ? category.slice(0, -1) : category,
    value: category,
  }));

module.exports = function (plop) {
  /**
   * name and description of our template
   * @todo: replace with addMany
   * @see: https://plopjs.com/documentation/#addmany
   *
   * @todo: don't ask for type when modules is chosen
   * */
  plop.setGenerator("", {
    description: "Creates a module",

    prompts: [
      {
        type: "list",
        name: "location",
        message: "Select UI category:",
        default: "primitives",
        choices: generateUiCategories(uiCategories, true),
      },
      {
        type: "list",
        name: "type",
        message: "Select UI type:",
        default: "typography",
        choices: generateUiCategories(uiTypes),
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
        path: "ui/{{location}}/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "ui/templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "ui/{{location}}/{{type}}/{{pascalCase name}}/index.ts",
        templateFile: "ui/templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "ui/{{location}}/{{type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "ui/templates/component.stories.tsx.hbs",
      },
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
      {
        type: "append",
        path: "ui/{{location}}/{{type}}/index.ts",
        pattern: `/* DO_NOT_EDIT_IMPORT_MODULE */`,
        template: `import { {{pascalCase name}} } from './{{type}}/{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "ui/{{location}}/{{type}}/index.ts",
        pattern: `/* DO_NOT_EDIT_EXPORT_MODULE */`,
        template: `  {{pascalCase name}},`,
      },
    ],
  });
};
