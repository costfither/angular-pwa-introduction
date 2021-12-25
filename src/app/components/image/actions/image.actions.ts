import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ImageDTO } from '../../../models/image.dto';

export const getAllImages = createAction('[Image list] get all image');
export const getAllImagesSuccess = createAction(
  '[Image list] get all image list success',
  props<{ images: ImageDTO[] }>()
);
export const getAllImagesFailure = createAction(
  '[Image list] get all image list failure',
  props<{ payload: HttpErrorResponse }>()
);
export const getImagebyId = createAction(
  '[Image page] get image by id',
  props<{ userId: string }>()
);
export const getImagebyIdSuccess = createAction(
  '[Image page] get image by id success',
  props<{ images: ImageDTO }>()
);
export const getImagebyIdFailure = createAction(
  '[Image page] get image by id failure',
  props<{ payload: HttpErrorResponse }>()
);
