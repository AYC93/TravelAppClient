import { createAction, props } from '@ngrx/store';
import { ServerEmail } from '../../models/model';

export enum LoginActionType {
  UPDATE_USER_INFO = '[LOGIN] Update User Info',
}

export const updateUserInfoAction = createAction(
    LoginActionType.UPDATE_USER_INFO,
    props<{payload: ServerEmail}>()
);
