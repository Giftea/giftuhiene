import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there! <br />
          I'm Uhiene Gift
        </SectionTitle>
        <SectionText>
          A Reactjs/Nextjs Developer who's in love with the ever learning
          process of my career. I am determined, detailed, analytic and a
          challenge-loving chap who's open to new concepts and ideas.
        </SectionText> <SectionDivider />
        {/* <Button onClick={props.handleClick}>View Projects</Button> */}
      </LeftSection>
     
    </Section>
  </>
);

export default Hero;
