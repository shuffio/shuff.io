export type WidthType = `${number}px`;
type BreakpointsTypes = { [name: string]: WidthType };

export const breakpoints: BreakpointsTypes = {
  xs: `0px`,
  sm: `360px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1440px`,
};
