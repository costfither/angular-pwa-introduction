import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as CharacterActions from '../actions';
import { CharactersDTO } from '../models/characters.dto';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: CharactersDTO[] = [];
  constructor(private store: Store<AppState>) {
    this.store.dispatch(CharacterActions.getAllCharacters());
  }

  ngOnInit(): void {
    this.store.select('characters').subscribe((characters) => {
      this.characters = characters.characters;
    });
  }
}
