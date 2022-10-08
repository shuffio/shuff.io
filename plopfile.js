module.exports = function (plop) {
  /* name and description of our template */
  plop.setGenerator("module", {
    description: "Creates a module",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Provide a module name in PascalCase:",
      },
    ],

    actions: [
      {
        type: "add",
        path: "ui/modules/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "ui/modules/templates/Module.tsx.hbs",
      },
      {
        type: "add",
        path: "ui/modules/{{pascalCase name}}/index.ts",
        templateFile: "ui/modules/templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "stories/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "ui/modules/templates/Module.stories.tsx.hbs",
      },
      // {
      //   type: "add",
      //   path: "tests/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
      //   templateFile: "templates/modules/test.tsx.hbs",
      // },
      {
        type: "append",
        path: "ui/modules/index.ts",
        pattern: `/* DO_NOT_EDIT_IMPORT_MODULE */`,
        template: `import { {{pascalCaseName}} } from './{{pascalCase name}}';`,
      },
    ],
  });

  plop.setGenerator("component", {
    description: "Creates a component for design system",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Provide a component name in PascalCase:",
      },
    ],

    actions: [
      {
        type: "add",
        path: "src/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/components/template.tsx.hbs",
      },
      {
        type: "add",
        path: "src/{{pascalCase name}}/index.ts",
        templateFile: "templates/components/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/{{pascalCase name}}/config.ts",
        templateFile: "templates/components/config.ts.hbs",
      },
      {
        type: "add",
        path: "src/{{pascalCase name}}/styles.ts",
        templateFile: "templates/components/styles.ts.hbs",
      },
      {
        type: "add",
        path: "src/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/components/story.tsx.hbs",
      },
      {
        type: "add",
        path: "src/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/components/test.tsx.hbs",
      },
      {
        type: "append",
        path: "src/index.ts",
        pattern: `/* PLOP_INJECT_COMPONENT */`,
        template: `export * from './{{pascalCase name}}';`,
      },
    ],
  });
};
