export interface AuthState {
  isLoggedIn: boolean;
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

export interface ReduxState {
  auth: AuthState;
  search: SearchState;
  compare: ModuleCompareState;
}
