export interface AuthState {
  isLoggedIn: boolean;
}

export interface SearchState {
  searchTerm: string;
}

export interface ReduxState {
  auth: AuthState;
  search: SearchState;
}

export interface ModuleCompareState {
  firstModuleCode: string,
  secondModuleCode: string
}