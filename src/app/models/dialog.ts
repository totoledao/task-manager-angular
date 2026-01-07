import { TemplateRef } from '@angular/core';
import { MainButton } from './mainButton';

export interface DialogData {
  title: string;
  content?: TemplateRef<any>;
  cancelAction: boolean;
  actions: MainButton[];
}
