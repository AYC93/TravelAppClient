import { createReducer, on } from "@ngrx/store";
import { CombinedModel } from "src/app/models/model";
import { updateEntriesAction } from "./dashboard.actions";

export const initialDashboardState: CombinedModel[] = [
  {
    planner: {
      pid: 0,
      dateTime: new Date,
      description: '',
      city: '',
      destinationType: '',
      url: '',
      emailId: 0, 
  },
    weatherTempInfo: {
      weatherInfoList: [{
        main: '',
        description: '',
        icon: '',
      }],
      tempInfo: {
        temp: '',
        tempMin: '',
        tempMax: '',
      },
      weatherLoc: {
        lat: '',
        lon: '',
      }
    },
  }];

export const dashboardReducer = createReducer(initialDashboardState, 
    on(updateEntriesAction, (state, { payload }) => ( state = payload )),
)
