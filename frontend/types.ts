import { Dispatch, SetStateAction } from "react";

export interface Module {
  code: string;
  title: string;
  description: string;
  expectedHours: number;
  difficulty: number;
  ratings: number;
  university: string;
}

export interface Review {
  userName: string;
  userDisplayPicture: string;
  likes: number;
  comments?: Comment[];
  userReview: string;
  id: string;
}

export interface Comment {
  userName: string;
  userDisplayPicture?: string;
  comment: string;
}

export interface User {
  fullName: string;
  studyStatus: string;
  studyCourse: string;
  modulesReviewed: number;
  modulesTaken: number;
  id: string;
}

export interface ModalState {
  isModalVisible: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}
