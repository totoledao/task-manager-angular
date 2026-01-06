import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.html',
})
export class MainButton {
  text = 'New task';
  leftIcon = input<null | string>(null);
  callback = output<void>();

  onCallback() {
    this.callback.emit();
  }
}
