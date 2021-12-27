import { ActionReducerMap } from '@ngrx/store';
import { CharactersEffects } from './components/Character/effects';
import * as CharactersReducer from './components/Character/reducer';

export interface AppState {
  characters: CharactersReducer.CharactersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  characters: CharactersReducer.CharactersReducer,
};

export const EffectsArray: any[] = [CharactersEffects];
