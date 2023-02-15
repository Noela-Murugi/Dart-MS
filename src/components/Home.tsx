import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectDarts } from "../features/Dart/dartSlice";
import Unit from "./Unit";

interface HomeInterface {
   homeRef: React.RefObject<HTMLDivElement>;
}
function Home(props: HomeInterface) {
   const { homeRef } = props;
   const darts = useSelector(selectDarts);

   return (
      <Container ref={homeRef}>
         {darts.map((dart) => (
            <Unit
               homeRef={homeRef}
               key={dart.id}
               id={dart.id}
               title={dart.title}
               backgroundImg={dart.backgroundImg}
            />
         ))}
      </Container>
   );
}

export default Home;

const Container = styled.div`
   overflow-y: auto;
   text-align: center;
   height: 100vh;
   scroll-snap-type: y mandatory;
`;
