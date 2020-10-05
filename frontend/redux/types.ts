export interface AuthState {
  isLoggedIn: boolean;
}

export interface ReduxState {
  authState: AuthState
}