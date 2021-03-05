import { useState } from "react";
import Button from "../UI/Button/Button";
import CommentRating from "../UI/CommentRating/CommentRating";
import axios from "axios";
import Popup from "../UI/Popup/Popup";
import { Wrapper, TopDiv, BottomDiv, StyledForm } from "./styles";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Textarea from "../UI/TextArea/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/user/userActions";
import { UserState } from "../../redux/user/userTypes";
import { AppState } from "../../redux/rootReducer";

interface AddCommentProps {
  visible: boolean;
  productId: string;
}

export const ReviewSchema = Yup.object().shape({
  rating: Yup.number().min(1, "Please select the Rating"),
  body: Yup.string().required("Empty Review").min(5, "To short"),
});

const AddComment: React.FC<AddCommentProps> = ({ visible, productId }) => {
  const [rating, setRating] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const { user, error }: UserState = useSelector(
    (state: AppState) => state.user
  );
  const dispatch = useDispatch();

  const handleAddComment = async ({ body, rating }) => {
    dispatch(addComment(body, user.name, rating, productId, user._id));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <Wrapper visible={visible}>
      <Formik
        isInitialValid={false}
        initialValues={{ body: "", rating }}
        validationSchema={ReviewSchema}
        onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
          await handleAddComment(values);
          resetForm();
          setRating(0);
        }}
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
              name="body"
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
                Add Comment
              </Button>
            </BottomDiv>
          </StyledForm>
        )}
      </Formik>

      <Popup showPopup={showPopup}>Comment added successfuly!</Popup>
    </Wrapper>
  );
};
export default AddComment;
