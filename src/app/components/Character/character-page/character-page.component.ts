import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as CharacterActions from '../actions';
import { CharactersDTO } from '../models/characters.dto';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css'],
})
export class CharacterPageComponent implements OnInit {
  character: CharactersDTO;
  panelOpenState: boolean = false;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.character = new CharactersDTO(
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
    );
  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    if (identifier) {
      this.store.dispatch(
        CharacterActions.getCharacterbyId({ characterId: identifier })
      );
      this.store.select('characters').subscribe((characters) => {
        this.character = characters.character;
      });
    }
  }
}
