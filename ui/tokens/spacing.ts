const fontBase = 16;
const unit = `rem`;

const sizes = [
  2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120,
] as const;

type Spaces = { [key in typeof sizes[number]]: `${number}rem` };

/** Converts `sizes` unit to rem */
export const rem = sizes.reduce<Spaces>(
  (acc, cur) => ({ ...acc, [cur]: `${cur / fontBase}${unit}` }),
  {} as Spaces
);

/** Converts `sizes` unit to px */
export const px = (pixels: number) => `${pixels}px`;

export const layout = {
  maxWidth: px(1200),
  padding: {
    x: rem[16],
    y: rem[24],
  },
};

export const navigation = {
  padding: {
    x: layout.padding.x,
    y: rem[24],
  },
};

export const footer = {
  padding: {
    x: layout.padding.x,
    y: rem[24],
  },
};
