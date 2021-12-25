import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageDTO } from 'src/app/models/image.dto';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  image: ImageDTO | undefined;

  constructor(
    private imagesService: ImagesService,
    // to read parameter from url
    private activedRoute: ActivatedRoute,
    // to redirect the user of this view if we don't have a valid identifier
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);
    if (identifier) {
      this.imagesService.getImagebyId(identifier).subscribe((image) => {
        if (!image) {
          return this.router.navigateByUrl('/');
        }
        this.image = image;
        console.log('Image --> ', this.image);
        return null;
      });
    }
  }
}
