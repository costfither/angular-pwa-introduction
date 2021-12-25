import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDTO } from '../models/image.dto';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<ImageDTO[]> {
    return this.http.get<ImageDTO[]>('https://picsum.photos/v2/list');
  }

  getImagebyId(id: string): Observable<ImageDTO> {
    return this.http.get<ImageDTO>('https://picsum.photos/id/' + id + '/info');
  }
}
