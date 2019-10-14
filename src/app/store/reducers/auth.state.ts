export interface AuthState {
	isLoggedIn: boolean;
	token: string;
	loading: boolean;
	error: boolean;
	currentUser: object
}

export const initialAuthState: AuthState = {
	isLoggedIn: false,
	token: '',
	loading: false,
	error: false,
	currentUser: null,
};
