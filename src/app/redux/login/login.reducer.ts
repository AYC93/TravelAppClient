import { createReducer, on } from "@ngrx/store";
import { ServerEmail } from "../../models/model";
import { updateUserInfoAction } from "./login.actions";

export const initialLoginState: ServerEmail = 
  {
    email: '',
    emailId: 0,
  };

export const loginReducer = createReducer(initialLoginState, 
    on(updateUserInfoAction, (state, { payload }) => ( state = payload )))
