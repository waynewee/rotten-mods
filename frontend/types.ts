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
  credit: number;
  semester: number[];
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
  acadYearTaken: number;
  semesterTaken: 1 | 2;
  workload: number;
  rating: {
    difficulty: number;
    star: number;
  };
  event: {
    like: {
      count: number;
    };
    view: {
      count: number;
    };
  };
  _id: string;
}

export interface Comment {
  userId: string;
  text: string;
}

export interface User {
  fullName: string;
  yearOfStudy: number;
  studyCourse: string;
  _id: string;
}

export interface ModalState {
  isModalVisible: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}

export interface Bookmark {
  modId: string;
  userId: string;
  _id: string;
}

export interface PlannedMods {
  modId: string;
  code: string;
  semester: number;
}