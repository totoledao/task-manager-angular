import { Component } from '@angular/core';
import { MainButton } from '../main-button/main-button';

@Component({
  selector: 'app-main-card',
  imports: [MainButton],
  templateUrl: './main-card.html',
  styles: ``,
})
export class MainCard {
  createTask() {
    console.log('Callback from parent');
  }
}
