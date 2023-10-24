import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  overflow: hidden;
`;
const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--dark);
  span {
    font-size: var(--fontBig);
    width: 90%;
    font-weight: 600;
    text-transform: capitalize;
  }
`;
const TextContainer2 = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--dark);
  span {
    font-size: var(--fontxxxl);
    width: 80%;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const DesignSection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <TextContainer ref={textOne}>
        <span>Flaw-less design with strong durability</span>
      </TextContainer>
      <TextContainer2 ref={textTwo}>
        <span>Flat-edge design with toughest smartphone glass.</span>
      </TextContainer2>
    </Section>
  );
};

export default DesignSection;
