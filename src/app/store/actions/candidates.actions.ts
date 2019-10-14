import { createAction, props } from '@ngrx/store';

export const fetchCandidates = createAction('[Candidates] Fetching candidates', props<{ payload: any }>());
export const fetchCandidatesSuccess = createAction('[Candidates] Succesfully fetched candidates', props<{ payload: any }>());
export const fetchCandidatesFailed = createAction('[Candidates] Failed fetching candidates', props<{ payload: any }>());
export const createCandidateFailed = createAction('[Candidates] Failed creating candidate', props<{ payload: any }>());
export const createCandidateSuccess = createAction('[Candidates] Succesfully created candidate', props<{ payload: any }>());
export const createCandidate = createAction('[Candidates] Creating candidate', props<{ payload: any }>());
export const deleteCandidate = createAction('[Candidates] Deleting candidate', props<{ payload: any }>());
export const deleteCandidatesSuccess = createAction('[Candidates] Succesfully delete candidate', props<{ payload: any }>());
export const deleteCandidatesFailed = createAction('[Candidates] Failed deleting candidate', props<{ payload: any }>());


// // ff