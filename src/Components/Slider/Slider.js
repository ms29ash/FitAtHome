import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import tw from "tailwind-styled-components";

function Slider({ children, containerClass, sliderClass }) {
  const scrollRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(500);
  const [widthDiv, setWidth] = useState(500);
  const [isAtScrollEnd, setIsAtScrollEnd] = useState(false);
  const [isAtScrollStart, setIsAtScrollStart] = useState(false);

  //Scroll button handler
  const rightScroll = () => {
    scrollRef.current.scrollLeft += scrollValue;
  };
  const leftScroll = () => {
    scrollRef.current.scrollLeft -= scrollValue;
  };

  //Scroll and Width of div
  let width = window.innerWidth;
  let containerWidth = scrollRef.current?.clientWidth;
  useEffect(() => {
    if (width < 400) {
      setScrollValue(containerWidth);
      setWidth(containerWidth / 1.25);
    } else if (width < 768) {
      setScrollValue(containerWidth);
      setWidth(containerWidth / 3);
    } else if (width < 1024) {
      setScrollValue(containerWidth / 2);
      setWidth(containerWidth / 4);
    } else {
      setScrollValue(containerWidth / 2);
      setWidth(containerWidth / 5);
    }
  }, [width, containerWidth]);

  //Button Visible and invisible
  useEffect(() => {
    const slider = scrollRef.current;

    const handleScroll = () => {
      if (slider.scrollWidth - slider.scrollLeft === slider.clientWidth) {
        console.log(
          slider.scrollWidth - slider.scrollLeft === slider.clientWidth
        );
        setIsAtScrollEnd(true);
      } else {
        setIsAtScrollEnd(false);
      }
      if (slider.scrollLeft === 0) {
        setIsAtScrollStart(true);
      } else {
        setIsAtScrollStart(false);
      }
    };

    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper className={containerClass}>
      <LeftBtn $scroll={isAtScrollStart} onClick={leftScroll}>
        <FaAngleLeft className={Btn} />
      </LeftBtn>
      <SlideContainer
        className={`${sliderClass} [&>div]:min-w-[${widthDiv}px] `}
        ref={scrollRef}
      >
        {children}
      </SlideContainer>
      <RightBtn $scroll={isAtScrollEnd} onClick={rightScroll}>
        <FaAngleRight className={Btn} />
      </RightBtn>
    </Wrapper>
  );
}

export default Slider;

const Wrapper = tw.div`relative flex justify-center w-full `;
const SlideContainer = tw.div` w-full flex items-stretch gap-6 snap-x snap-mandatory overflow-x-auto pb-4  scrollbar-none select-none`;

const Button = tw.button` absolute top-0 bottom-0  hidden  md:flex items-center justify-center   cursor-pointer invisible   group-hover:visible  ${(
  p
) => p.$scroll && "opacity-20"}  `;

const Btn =
  "w-[3.5rem] p-2 h-[3.5rem]   z-20  text-black  text-5xl bg-white rounded-full  shadow-[0px_3px_8px_rgba(0,0,0,0.24)] ";
const LeftBtn = tw(Button)`
-left-2`;

const RightBtn = tw(Button)`
-right-2`;
