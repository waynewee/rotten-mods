import { Bookmark, PlannedMods, Review } from "../types";

export interface AuthState {
  isLoggedIn: boolean;
  userId: string;
}

export interface SearchState {
  searchTerm: string;
}

export interface ModuleCompareState {
  firstModuleId: string;
  secondModuleId: string;
  firstModuleCode: string;
  secondModuleCode: string;
}

export interface PersonalModulesState {
  bookmarks: Bookmark[];
  planner: PlannedMods[];
  reviews: Review[];
}

// Add new reducer states above
// Then add as field in ReduxState below

export interface ReduxState {
  auth: AuthState;
  search: SearchState;
  compare: ModuleCompareState;
  personalModules: PersonalModulesState;
}
