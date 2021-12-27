import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pwa-introduction';
  showLoading: boolean = false;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.select('characters').subscribe((characters) => {
      this.showLoading = characters.loading;
    });
  }
}
