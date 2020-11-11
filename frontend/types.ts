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
  schoolId: string;
  _id: string;
  credit: number;
  semester: number[];
  prereqs: string[];
}

export interface Rating {
  count: number;
  value: number;
}

export interface Review {
  userName: string;
  // likes?: number;
  comments?: Comment[];
  text: string;
  acadYearTaken: number;
  semesterTaken: 1 | 2;
  workload: number;
  // rating: {
  //   difficulty: Rating;
  //   star: Rating;
  // };
  ratingIds: string[];
  reaction: {
    like: {
      count: number;
    };
  };
  _id: string;
  modId: string;
  userId: string;
  user?: {
    name: string;
    _id: string;
  };
  createdAt: string;
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
  _id: string;
  missingPrereqs: Module[];
}

export interface School {
  _id: string;
  name: string;
}

export interface Reaction {
  _id: string;
  userId: string;
  sub: "mod" | "review" | "school" | "course";
  subId: string;
  type: "like" | "love" | "dislike";
  createdAt: string;
  updatedAt: string;
}
