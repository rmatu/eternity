import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
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
  const [fillColor, setFillColor] = useState<string>("#fff");
  const { items: favoritesItems }: FavoritesState = useSelector(
    (state: AppState) => state.favorites
  );

  useEffect(() => {
    setFillColor(checkIfFavorite(productId, favoritesItems));
  }, [favoritesItems]);

  return (
    <Wrapper onClick={onClick}>
      <BiHeart fill={fillColor} />
    </Wrapper>
  );
};

export default Favorite;
