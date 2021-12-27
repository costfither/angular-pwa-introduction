import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { CharactersDTO } from '../models/characters.dto';

export const getAllCharacters = createAction(
  '[Characters list] get all characters'
);
export const getAllCharactersSuccess = createAction(
  '[Characters list] get all characters success',
  props<{ characters: CharactersDTO[] }>()
);
export const getAllCharactersFailure = createAction(
  '[Characters list] get all characters failure',
  props<{ payload: HttpErrorResponse }>()
);
export const getCharacterbyId = createAction(
  '[Character page] get character by id',
  props<{ characterId: string }>()
);
export const getCharacterbyIdSuccess = createAction(
  '[Character page] get character by id success',
  props<{ character: CharactersDTO }>()
);
export const getCharacterbyIdFailure = createAction(
  '[Character page] get character by id failure',
  props<{ payload: HttpErrorResponse }>()
);
