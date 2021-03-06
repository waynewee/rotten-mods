import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ModalState, Review, Module } from "../types";
import reviewApi from "../api/review";
import { fetchRatings } from "../utils/helpers";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { reviewBlue, submitBlue, crossRed } from "../styles/colors";
import { message } from "antd";

interface AddReviewModalProps extends ModalState {
  code: string;
  module: Module;
  updateReviews: () => void;
  updateModule: () => void;
  reviewByUser: Review;
  ratingsByUser: { _id: string };
}

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const yearShortform = currentYear % 2000; // eg. 2021 => 21
const currentSemester = currentMonth < 6 ? 2 : 1;
const currentAYSecondYear =
  currentSemester === 1 ? yearShortform + 1 : yearShortform;
const yearMinusOne = currentAYSecondYear - 1;

const initialReviewState = {
  text: "",
  ratingIds: [],
  workload: 10,
  semesterTaken: "",
  acadYearTaken: `${yearMinusOne}/${currentAYSecondYear}`,
};

const AddReviewModal: React.FC<AddReviewModalProps> = ({
  code,
  module,
  updateReviews,
  updateModule,
  isModalVisible,
  setModalVisibility,
  reviewByUser,
  ratingsByUser,
}) => {
  const initialReview = reviewByUser ?? initialReviewState;

  const [text, setText] = useState(initialReview.text);
  const [difficulty, setDifficulty] = useState(3);
  const [ratings, setRatings] = useState(3);
  const [semester, setSemester] = useState(initialReview.semesterTaken);
  const [year, setYear] = useState(initialReview.acadYearTaken);
  const userId = useSelector((state) => state.auth.user?._id);
  console.log(module);
  useEffect(() => {
    const ratingIds = reviewByUser?.ratingIds;
    if (ratingIds?.length > 0) {
      fetchRatings(ratingIds, setRatings, setDifficulty);
    }
  }, []);

  useEffect(() => {
    if (reviewByUser) {
      setText(reviewByUser.text);
      // setDifficulty()
      // setRatings()
      setSemester(reviewByUser.semesterTaken);
      setYear(reviewByUser.acadYearTaken);
    }
  }, [reviewByUser]);

  const onSubmit = async () => {
    if (!validateForm()) {
      message.error("You need to fill in all fields!");
      return;
    }

    const requestBody = {
      text,
      semesterTaken: semester as string,
      acadYearTaken: year as string,
      modId: module._id,
      userId,
      ratings: [
        {
          type: "difficulty",
          value: difficulty,
        },
        {
          type: "star",
          value: ratings,
        },
      ],
    };

    if (reviewByUser) {
      await reviewApi.updateReviewOfModule(requestBody, reviewByUser._id);
      updateReviews();
      // update ratings
    } else {
      if (ratingsByUser) {
        await reviewApi.deleteRating(ratingsByUser._id);
      }

      await reviewApi.addReviewOfModule(requestBody);
    }

    setModalVisibility(false);
    updateReviews();
    updateModule();
  };

  const validateForm = () =>
    ratings !== 0 && difficulty !== 0 && text.trim() !== "";

  const closeModal = (isToClose) => {
    setModalVisibility(isToClose);
  };

  return (
    <FormModal
      backgroundColor={reviewBlue}
      submitColor={submitBlue}
      title={`${reviewByUser ? "Edit" : "Add"} Review`}
      isModalVisible={isModalVisible}
      setModalVisibility={closeModal}
      onSubmit={onSubmit}
    >
      <FormModalItem label="Module Code" type="text" value={code} />
      <FormModalItem
        label="Review"
        type="textarea"
        value={text}
        setValue={setText}
      />
      <FormModalItem
        label="Year Taken"
        type="annualYear"
        value={year}
        setValue={setYear}
      />
      <FormModalItem
        label="Semester Taken"
        type="semester"
        value={semester}
        options={module.semester}
        setValue={setSemester}
      />
      <FormModalItem
        label="Difficulty"
        type="difficulty"
        value={difficulty}
        setValue={setDifficulty}
      />
      <FormModalItem
        label="Ratings"
        type="rate"
        value={ratings}
        setValue={setRatings}
      />
    </FormModal>
  );
};

export default AddReviewModal;
