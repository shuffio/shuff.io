type BreakpointsTypes = { [name: string]: number };

export const breakpoints: BreakpointsTypes = {
  xs: 0,
  sm: 414,
  md: 768,
  lg: 1024,
  xl: 1440,
} as const;

export type Breakpoints = keyof typeof breakpoints;
export type WithBreakpoints<T> = T | Partial<Record<Breakpoints, T>>;

/**
 * Converts a breakpoint object to a set of CSS `@media` queries
 * Example when valueAtBreakpoints is the same across breakpoints:
 * valueAtBreakpoints: "8px", cssProperty: "height"
 * Result => `height: 10px`
 *
 * Example when valueAtBreakpoints has different mobile and desktop breakpoints:
 * valueAtBreakpoints: {mobile: "8px", desktop: "16px"}, cssProperty: "height"
 * Result =>
 * `@media` (min-width: MOBILE_BREAKPOINT) {
 *    height: 8px;
 * }
 * `@media` (min-width: DESKTOP_BREAKPOINT) {
 *    height: 16px;
 * }
 *
 * @param valueAtBreakpoints Either a primitive to use across breakpoints, or a breakpoint object. @see {WithBreakpoints}
 * @param cssProperty The CSS property to use for each breakpoint value.
 * - if a string is passed (ex. "max-height"), apply the breakpoint value directly: `max-height: 16px;`
 * - if a function is passed (ex. (value) => `max-height: ${value};`), apply the return of that function within each media query
 * @returns A bunch of CSS rulesets to apply
 */
export const toBreakpointStyles = <TBreakpointValues>(
  valueAtBreakpoints: WithBreakpoints<TBreakpointValues>,
  cssProperty: string | ((value: TBreakpointValues) => string)
) => {
  const toCSSRule = (value: TBreakpointValues) => {
    return typeof cssProperty === "function"
      ? // if you specify a function that returns a rule or ruleset,
        // inject the return value into our CSS
        cssProperty(value)
      : // if you only specify the css property to set (ex. "max-height"),
        // apply the breakpoint value to that property
        `${cssProperty}: ${value}`;
  };
  // if no breakpoint object is provided (i.e. valueAtBreakpoints is a primitive),
  // create the CSS ruleset without any media queries
  if (
    typeof valueAtBreakpoints === "string" ||
    typeof valueAtBreakpoints === "number"
  ) {
    return toCSSRule(valueAtBreakpoints);
  } else {
    // otherwise, map each breakpoint to the correct media query
    return Object.entries(valueAtBreakpoints as {}).map(
      ([breakpoint, value]) => {
        return `
        @media (min-width: ${breakpoints[breakpoint]}px) {
          ${toCSSRule(value as TBreakpointValues)}; 
        }`;
      }
    );
  }
};
