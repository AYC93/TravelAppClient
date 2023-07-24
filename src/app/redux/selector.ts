import { createSelector } from "@ngrx/store";
import { ReduxAppState } from "./state.model";

export const loginFeature = (state: ReduxAppState) => state.login;
export const emailSelector = createSelector(loginFeature, (state) => state.email);
export const emailIdSelector = createSelector(loginFeature, (state) => state.emailId);

export const dashboardFeature = (state: ReduxAppState) => state.dashboard;
export const dashboardSelector = createSelector(dashboardFeature, (state) => state);