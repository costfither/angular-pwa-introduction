import { Action, createReducer, on } from '@ngrx/store';
import { ImageDTO } from 'src/app/models/image.dto';
import {
  getAllImages,
  getAllImagesFailure,
  getAllImagesSuccess,
  getImagebyId,
  getImagebyIdFailure,
  getImagebyIdSuccess,
} from '../actions/image.actions';

export interface ImagesState {
  images: ImageDTO[];
  image: ImageDTO;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const imageState: ImagesState = {
  images: new Array<ImageDTO>(),
  image: new ImageDTO('', '', 0, 0, '', ''),
  loading: false,
  loaded: false,
  error: null,
};

const _imageReducer = createReducer(
  imageState,
  on(getAllImages, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getAllImagesSuccess, (state, action) => ({
    ...state,
    images: action.images,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getAllImagesFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(getImagebyId, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getImagebyIdSuccess, (state, action) => ({
    ...state,
    image: action.images,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getImagebyIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  }))
);
export function imageReducer(
  state: ImagesState | undefined,
  action: Action
): ImagesState {
  return _imageReducer(state, action);
}
