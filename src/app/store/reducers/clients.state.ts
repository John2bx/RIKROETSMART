export interface ClientsState {
	candidates: object[];
	loading: boolean;
	error: boolean
}

export const initialClientsState: ClientsState = {
	candidates: null,
	loading: false,
	error: false,
};
