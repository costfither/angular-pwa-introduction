import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { CharactersService } from 'src/app/services/character.service';
import * as CharacterActions from '../actions';

@Injectable()
export class CharactersEffects {
  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private characterService: CharactersService,
    private router: Router
  ) {
    this.responseOK = false;
  }
  getImageById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.getCharacterbyId),
      exhaustMap(({ characterId }) =>
        this.characterService.getImagebyId(characterId).pipe(
          map((character) => {
            return CharacterActions.getCharacterbyIdSuccess({
              character: character,
            });
          }),
          catchError((error) => {
            return of(
              CharacterActions.getCharacterbyIdFailure({ payload: error })
            );
          })
        )
      )
    )
  );

  getImageByIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CharacterActions.getCharacterbyIdFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
        })
      ),
    { dispatch: false }
  );

  getImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.getAllCharacters),
      exhaustMap(() =>
        this.characterService.getAllImages().pipe(
          map((characters) => {
            return CharacterActions.getAllCharactersSuccess({
              characters: characters,
            });
          }),
          catchError((error) => {
            return of(
              CharacterActions.getAllCharactersFailure({ payload: error })
            );
          })
        )
      )
    )
  );

  getImagesFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CharacterActions.getAllCharactersFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
        })
      ),
    { dispatch: false }
  );
}
