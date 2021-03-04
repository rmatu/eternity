import { useState } from "react";
import { RatingWrapper } from "./styles";
import { BsStarFill, BsStar } from "react-icons/bs";

interface RatingProps {
  rColor?: any;
  margin?: any;
  rating: number;
  setRating: (rating: number) => void;
}

const CommentRating: React.FC<RatingProps> = ({
  rColor,
  margin,
  rating,
  setRating,
}) => {
  return (
    <RatingWrapper rColor={rColor} margin={margin}>
      <div onClick={() => setRating(1)}>
        {rating >= 1 ? <BsStarFill /> : <BsStar />}
      </div>
      <div onClick={() => setRating(2)}>
        {rating >= 2 ? <BsStarFill /> : <BsStar />}
      </div>
      <div onClick={() => setRating(3)}>
        {rating >= 3 ? <BsStarFill /> : <BsStar />}
      </div>
      <div onClick={() => setRating(4)}>
        {rating >= 4 ? <BsStarFill /> : <BsStar />}
      </div>
      <div onClick={() => setRating(5)}>
        {rating >= 5 ? <BsStarFill /> : <BsStar />}
      </div>
    </RatingWrapper>
  );
};
export default CommentRating;
