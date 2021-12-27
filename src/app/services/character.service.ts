import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersDTO } from '../components/Character/models/characters.dto';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<CharactersDTO[]> {
    return this.http.get<CharactersDTO[]>(
      'https://akabab.github.io/starwars-api/api/all.json'
    );
  }

  getImagebyId(id: string): Observable<CharactersDTO> {
    return this.http.get<CharactersDTO>(
      'https://akabab.github.io/starwars-api/api/id/' + id + '.json'
    );
  }
}
