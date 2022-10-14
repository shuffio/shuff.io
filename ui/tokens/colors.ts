import { CSSProperties } from "styled-components";

export type ColorsType = { [name: string]: CSSProperties["color"] };

export const rainbow: ColorsType = {
  red: `#EB5A5D`,
  orange: `#F3714B`,
  yellow: `#F8B67A`,
  green: `#28616C`,
  darkGreen: `#0A1E23`,
};

export const neutrals: ColorsType = {
  white: `#F9FDDC`,
  black: `#101316`,
};

export const brand: ColorsType = {
  light: neutrals.white,
  primary: rainbow.yellow,
  secondary: rainbow.red,
  tertiary: rainbow.green,
  dark: neutrals.black,
};
