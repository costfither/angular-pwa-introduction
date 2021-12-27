import { Action, createReducer, on } from '@ngrx/store';
import { CharactersDTO } from 'src/app/components/Character/models/characters.dto';
import {
  getAllCharacters,
  getAllCharactersFailure,
  getAllCharactersSuccess,
  getCharacterbyId,
  getCharacterbyIdFailure,
  getCharacterbyIdSuccess,
} from '../actions/character.actions';

export interface CharactersState {
  characters: CharactersDTO[];
  character: CharactersDTO;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const charactersState: CharactersState = {
  characters: new Array<CharactersDTO>(),
  character: new CharactersDTO(
    0,
    '',
    0,
    0,
    '',
    '',
    '',
    '',
    0,
    '',
    0,
    '',
    '',
    '',
    '',
    []
  ),
  loading: false,
  loaded: false,
  error: null,
};

const _characterReducer = createReducer(
  charactersState,
  on(getAllCharacters, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getAllCharactersSuccess, (state, action) => ({
    ...state,
    characters: action.characters,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getAllCharactersFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(getCharacterbyId, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getCharacterbyIdSuccess, (state, action) => ({
    ...state,
    character: action.character,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getCharacterbyIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  }))
);
export function CharactersReducer(
  state: CharactersState | undefined,
  action: Action
): CharactersState {
  return _characterReducer(state, action);
}
