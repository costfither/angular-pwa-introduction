import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { ImagesComponent } from './images/images.component';

@NgModule({
  declarations: [ImagesComponent, ImageComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ImageModule {}
