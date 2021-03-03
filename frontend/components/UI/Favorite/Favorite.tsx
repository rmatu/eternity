import React, { useEffect, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { FavoritesState } from "../../../redux/favorites/favoritesTypes";
import { AppState } from "../../../redux/rootReducer";
import { useSelector } from "react-redux";
import { checkIfFavorite } from "../../../utils/reduxHelpers";
import { Wrapper } from "./styles";

interface FavoriteProps {
  onClick: () => void;
  productId: string;
}

const Favorite: React.FC<FavoriteProps> = ({ productId, onClick }) => {
  const { items: favoritesItems }: FavoritesState = useSelector(
    (state: AppState) => state.favorites
  );

  if (checkIfFavorite(productId, favoritesItems)) {
    return (
      <Wrapper onClick={onClick}>
        <HiHeart fill="#BE6A15" />
      </Wrapper>
    );
  }

  return (
    <Wrapper onClick={onClick}>
      <HiOutlineHeart />
    </Wrapper>
  );
};

export default Favorite;
