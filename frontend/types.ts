export interface Module {
  code: string;
  title: string;
  description: string;
}

export interface ModuleMeta extends Module {
  expectedHours: number;
  difficulty: number;
  ratings: number;
  university: string;
}

export interface Review {
  userName: string;
  userDisplayPicture: string;
  likes: number;
  comments: Comment[];
  userReview: string;
}

export interface Comment {
  userName: string;
  userDisplayPicture: string;
  comment: string;
}

export interface User { 
  fullName: string;
  studyStatus: string;
  studyCourse: string;
  modulesReviewed: number;
  modulesTaken: number;
}
