export interface EventsState {
	events: object[];
	loading: boolean;
	error: boolean
}

export const initialEventsState: EventsState = {
	events: null,
	loading: false,
	error: false,
};
