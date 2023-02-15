import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { selectDarts, setDartRef } from "../features/Dart/dartSlice";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/store";

interface SectionInterface {
   id: number;
   title: string;
   backgroundImg: string;
   homeRef: React.RefObject<HTMLDivElement>;
}

function Section(props: SectionInterface) {
   let myRef = useRef<HTMLDivElement>(null);
   const dispatch = useAppDispatch();
   const darts = useAppSelector(selectDarts);

   useEffect(() => {
      if (myRef.current) {
         dispatch(setDartRef({ id: props.id, ref: myRef }));
      }
   }, [myRef.current]);

   return (
      <Wrap ref={myRef} bgImage={props.backgroundImg}>
         <Fade direction="up">
            <ItemSet>
               <h1 className="text-4xl font-bold text-black">{props.title}</h1>
               <p>Order now</p>
            </ItemSet>
         </Fade>
         <Buttons>
            <Fade direction="up">
               <ButtonGroup>
                  <Link to={`/darts/${props.id}`}>
                     <LeftButton className=" hover:animate-bounce ">
                        Special Order
                     </LeftButton>
                  </Link>
                  <Link to="/dartt">
                     <RightButton className="hover:animate-bounce ">
                       Current Listing
                     </RightButton>
                  </Link>
               </ButtonGroup>
            </Fade>
            {props.id !== darts.length && (
               <DownArrow
                  onClick={() =>
                     props.homeRef?.current?.scrollTo({
                        behavior: "smooth",
                        top: darts[props.id].ref.offsetTop,
                     })
                  }
                  className="mx-auto cursor-pointer"
                  src="images/down-arrow.svg"
               ></DownArrow>
            )}
         </Buttons>
      </Wrap>
   );
}

export default Section;

