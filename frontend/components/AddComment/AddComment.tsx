import { useState } from "react";
import Button from "../UI/Button/Button";
import CommentRating from "../UI/CommentRating/CommentRating";
import axios from "axios";
import Popup from "../UI/Popup/Popup";
import { Wrapper, TopDiv, BottomDiv, StyledForm } from "./styles";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Textarea from "../UI/TextArea/TextArea";

interface AddCommentProps {
  visible: boolean;
}

export const ReviewSchema = Yup.object().shape({
  rating: Yup.number().min(1, "Please select the Rating"),
  review: Yup.string().required("Empty Review").min(5, "To short"),
});

const AddComment: React.FC<AddCommentProps> = ({ visible }) => {
  const [rating, setRating] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>("");

  const handleAddComment = async (values) => {
    console.log(values);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <Wrapper visible={visible}>
      <Formik
        isInitialValid={false}
        initialValues={{ review: "", rating }}
        validationSchema={ReviewSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) =>
          await handleAddComment(values)
        }
      >
        {({ isSubmitting, isValid, setFieldValue }) => (
          <StyledForm>
            <TopDiv>
              <p>Your comment</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <p>Rating:</p>
                <CommentRating
                  rating={rating}
                  setFieldValue={setFieldValue}
                  setRating={setRating}
                  rColor="#be6a15"
                  margin={"0.2em 0 0 0.4em"}
                />
              </div>
            </TopDiv>
            <Field
              type="textarea"
              name="review"
              placeholder="Type here..."
              component={Textarea}
            />
            <BottomDiv>
              <Button
                loading={isSubmitting ? "Sending..." : null}
                disabled={!isValid}
                type="submit"
                bColor="#be6a15"
                padding="0.2em 3em"
              >
                Send
              </Button>
            </BottomDiv>
          </StyledForm>
        )}
      </Formik>

      <Popup showPopup={showPopup}>{popupMessage}</Popup>
    </Wrapper>
  );
};
export default AddComment;
