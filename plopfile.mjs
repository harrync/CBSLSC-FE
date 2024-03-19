const plopConfig = (plop) => {
  // Storybook component generator
  plop.setGenerator("component", {
    description: "generate new CBSLSC component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/stories/Cb{{pascalCase name}}/Cb{{pascalCase name}}.stories.ts",
        templateFile: ".plop/_templates/story.hbs",
      },
      {
        type: "add",
        path: "src/stories/Cb{{pascalCase name}}/index.tsx",
        templateFile: ".plop/_templates/component.hbs",
      },
      {
        type: "add",
        path: "src/stories/Cb{{pascalCase name}}/cb-{{dashCase name}}.scss",
        templateFile: ".plop/_templates/scss.hbs",
      },
    ],
  });
};

export default plopConfig;
