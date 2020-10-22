import { Dispatch, SetStateAction } from "react";

export interface Module {
  code: string;
  title: string;
  description: string;
  workload: number;
  rating: {
    difficulty: Rating;
    star: Rating;
  };
  university: string;
  _id: string;
}

export interface Rating {
  count: number;
  value: number;
}

export interface Review {
  userName: string;
  // userDisplayPicture: string;
  likes?: number;
  comments?: Comment[];
  text: string;
  yearTaken: number;
  semesterTaken: 1 | 2;
  workload: number;
  rating: {
    difficulty: number;
    star: number;
  };
  _id: string;
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
  _id: string;
}

export interface ModalState {
  isModalVisible: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}
