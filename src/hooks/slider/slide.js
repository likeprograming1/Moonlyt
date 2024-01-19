import React, { useEffect, useRef, useState } from "react";
import {
  ImgBox,
  Slide,
  SlideLi,
  SlideUl,
  Button,
  Preview,
  PreviewLi,
  PreviewRi,
  NextButton,
} from "./style";
import Larr from "../../images/slide/Larrow.svg";
import Rarr from "../../images/slide/Rarrow.svg";

const Slide1 = ({ images }) => {
  const slideRef = useRef(null);
  const [Current, setCurrent] = useState(0);
  const isPurse = false; //play button state
  const [isSlide, setIsSlide] = useState(false);
  const [x, setX] = useState(0);

  const [isClick, setIsClick] = useState(false);
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);

  const handleNext = async () => {
    if (isSlide) {
      return;
    }
    setX(-67);
    setIsSlide(true);
    await setTimeout(() => {
      setCurrent((Current + 1) % images.length);
      setX(0);
      setIsSlide(false);
    }, 500);
  };

  const handlePrev = async () => {
    if (isSlide) {
      return;
    }
    setX(67);
    setIsSlide(true);
    await setTimeout(() => {
      setX(0);
      setCurrent(Current === 0 ? images.length - 1 : Current - 1);
      setIsSlide(false);
    }, 500);
  };

  const onMouseDown = (event) => {
    setIsClick(true);
    setMouseDownClientX(event.pageX);
  };
  const onMouseLeave = (event) => {
    setIsClick(false);
  };
  const onMouseUp = (event) => {
    setIsClick(false);
    const imgX = mouseUpClientX - mouseDownClientX;
    if (imgX < -100) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      handleNext();
    } else if (imgX > 100) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      handlePrev();
    }
  };
  const onMouseMove = (event) => {
    if (!isClick) return;
    event.preventDefault();
    setMouseUpClientX(event.pageX);
    const imgX = mouseDownClientX - mouseUpClientX;
    if (Math.abs(imgX) > 100) {
      // slideRef.current.style.transform = `translateX(${imgX}px)`;
    }
  };

  useEffect(() => {
    if (!isPurse && !isClick) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Current, isPurse, isClick]);

  return (
    <Slide>
      <SlideUl
        ref={slideRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        style={{
          transform: `translatex(${x}vw)`,
          transition: isSlide ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        <PreviewLi>
          <Preview
            src={
              images[
                Current === 1
                  ? images.length - 1
                  : Current === 0
                  ? images.length - 2
                  : Current - 2
              ]
            }
          />
        </PreviewLi>
        <PreviewLi>
          <Preview
            src={images[Current === 0 ? images.length - 1 : Current - 1]}
          />
        </PreviewLi>
        <SlideLi>
          <ImgBox src={images[Current]} alt={`Slide${Current}`} />
        </SlideLi>
        <PreviewRi>
          <Preview src={images[(Current + 1) % images.length]} />
        </PreviewRi>
        <PreviewRi>
          <Preview src={images[(Current + 2) % images.length]} />
        </PreviewRi>
      </SlideUl>
      <NextButton
        onClick={() => {
          handlePrev();
        }}
      >
        <img src={Larr} alt="Left-arrow" className="Left"></img>
      </NextButton>
      <Button
        onClick={() => {
          handleNext();
        }}
      >
        <img src={Rarr} alt="Right-arrow" className="Right"></img>
      </Button>
    </Slide>
  );
};

export default Slide1;
