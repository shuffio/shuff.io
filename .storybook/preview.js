import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../styles/GlobalStyle";

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Tokens", "Primitives", "Components", "Modules"],
    },
  },
};
