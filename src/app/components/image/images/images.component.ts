import { Component, OnInit } from '@angular/core';
import { ImageDTO } from 'src/app/models/image.dto';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  images: ImageDTO[] = [];
  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => (this.images = images));
  }
}
