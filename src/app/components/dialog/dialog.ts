import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Dialog as DialogService } from '../../services/dialog';
import { MainButton } from '../main-button/main-button';

@Component({
  selector: 'app-dialog',
  imports: [MainButton, NgTemplateOutlet],
  templateUrl: './dialog.html',
})
export class Dialog {
  dialogService = inject(DialogService);
  data = this.dialogService.data;

  close() {
    this.dialogService.close();
  }
}
