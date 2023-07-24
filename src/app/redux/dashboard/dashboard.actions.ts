import { createAction, props } from '@ngrx/store';
import { CombinedModel } from 'src/app/models/model';

export enum DashboardActionType {
  UPDATE_ENTRIES = '[DASHBOARD] Update Entries',
  DELETE_ENTRY = '[DASHBOARD] Delete Entry',
}

export const updateEntriesAction = createAction(
  DashboardActionType.UPDATE_ENTRIES,
    props<{payload: CombinedModel[]}>()
);

export const deleteEntryAction = createAction(
  DashboardActionType.DELETE_ENTRY,
    props<{payload: number}>()
);
