export interface MailState {
	incoming: object[];
	outgoing: object[];
	loading: boolean;
	error: boolean
}

export const initialMailState: MailState = {
	incoming: null,
	outgoing: null,
	loading: false,
	error: false,
};
