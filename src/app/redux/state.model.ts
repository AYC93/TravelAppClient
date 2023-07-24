import { CombinedModel, ServerEmail } from '../models/model';

export interface ReduxAppState {
  readonly login: ServerEmail;
  readonly dashboard: CombinedModel[];
}