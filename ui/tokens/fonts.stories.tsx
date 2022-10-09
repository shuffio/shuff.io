import { Meta, Story } from "@storybook/react";
import { Body } from "@ui/primitives/typography";
import { brand } from "./colors";
import { layout } from "./shadows";
import { families } from "./fonts";
import { rem } from "./spacing";
import styled, { CSSProperties } from "styled-components";

/** @todo: convert to args */
const headlineText = `shuff.io`;
const paragraphText = (
  <>
    <strong>Shuffleboard</strong>, more precisely{" "}
    <strong>deck shuffleboard</strong>, and also known as{" "}
    <strong>floor shuffleboard</strong>, is a game in which players use cues to
    push weighted discs, sending them gliding down a narrow court, with the
    purpose of having them come to rest within a marked scoring area. As a more
    generic term, it refers to the family of shuffleboard-variant games as a
    whole.
  </>
);

export default {
  title: "Tokens/Fonts",
  // parameters: { layout: "fullscreen" },
} as Meta;

const FontExamples = () => (
  <>
    {Object.entries(families).map((font, i) => (
      <Container key={i}>
        <span>{font[0]}:</span>
        <div>
          <Font
            family={font[1]}
            backgroundColor={brand.light}
            textColor="black"
          >
            {headlineText}
          </Font>
          <Font
            family={font[1]}
            backgroundColor={brand.primary}
            textColor="black"
          >
            {headlineText}
          </Font>
          <Font
            family={font[1]}
            backgroundColor={brand.secondary}
            textColor="black"
          >
            {headlineText}
          </Font>
          <Font
            family={font[1]}
            backgroundColor={brand.tertiary}
            textColor="white"
          >
            {headlineText}
          </Font>
          <Font family={font[1]} backgroundColor={brand.dark} textColor="white">
            {headlineText}
          </Font>
          <Paragraph family={font[1]} className="details">
            <em>
              <strong>Typeface:</strong> {font[1]};
            </em>
          </Paragraph>
          <Paragraph family={font[1]}>{paragraphText}</Paragraph>
        </div>
      </Container>
    ))}
  </>
);

export const Fonts: Story = () => <FontExamples />;

const Container = styled.div`
  padding: ${rem[16]};
  &:not(:last-of-type) {
    margin-bottom: ${rem[48]};
  }

  & > span {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
    font-size: 12px;
    box-shadow: ${layout.close};
    padding: ${rem[8]} ${rem[24]};
  }
`;

const Font = styled.div<{
  family: CSSProperties["fontFamily"];
  backgroundColor: CSSProperties["backgroundColor"];
  textColor: CSSProperties["color"];
}>`
  font-family: ${({ family }) => family};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-size: 36px;
  display: inline-block;
  box-shadow: ${layout.close};
  padding: ${rem[16]};
  margin-bottom: ${rem[16]};
`;

const Paragraph = styled.p<{ family: CSSProperties["fontFamily"] }>`
  font-family: ${({ family }) => family};
  line-height: 1.4;
  max-width: 640px;

  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }

  &.details {
    margin-bottom: ${rem[8]};
    font-size: 12px;
  }
`;
