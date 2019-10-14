export interface CandidateState {
	candidates: object[];
	loading: boolean;
	error: boolean
}

export const initialCandidateState: CandidateState = {
	candidates: null,
	loading: false,
	error: false,
};
