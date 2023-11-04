import React from "react";
import tw from "tailwind-styled-components";
import Favorite from "./Favorite";
import { useSelector } from "react-redux";

function Favorites() {
  const favorites = useSelector((state) => state.list.favorites);
  return (
    <Container>
      {favorites.map((item, n) => {
        return <Favorite key={item._id} index={n} item={item} />;
      })}
    </Container>
  );
}

export default Favorites;

const Container = tw.div`
flex w-full flex-wrap
`;
