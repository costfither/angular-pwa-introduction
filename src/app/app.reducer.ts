import { ActionReducerMap } from '@ngrx/store';
import * as ImageReducer from './components/image/reducer';

export interface AppState {
  images: ImageReducer.ImagesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  images: ImageReducer.imageReducer,
};
