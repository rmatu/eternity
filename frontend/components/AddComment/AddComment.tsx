import { Row } from "../Specification/styles";
import Button from "../UI/Button/Button";
import Rating from "../UI/Rating/Rating";
import { Wrapper, TopDiv, TextArea } from "./styles";

interface AddCommentProps {
  visible: boolean;
}

const AddComment: React.FC<AddCommentProps> = ({ visible }) => {
  return (
    <Wrapper visible={visible}>
      <TopDiv>
        <p>Your comment</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p>Rating:</p>
          <Rating rColor="#be6a15" margin={"0.2em 0 0 0.4em"} rating={5} />
        </div>
      </TopDiv>
      <TextArea placeholder="Type here..." id="w3review" name="w3review" />
      <Button bColor="#be6a15" padding="0.2em 3em">
        Send
      </Button>
    </Wrapper>
  );
};
export default AddComment;
