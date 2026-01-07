import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, inject } from '@angular/core';
import { Dialog as DialogComponent } from '../components/dialog/dialog';
import { DialogData } from '../models/dialog';

@Injectable({ providedIn: 'root' })
export class Dialog {
  private overlay = inject(Overlay);
  private overlayRef?: OverlayRef = undefined;
  data?: DialogData = undefined;

  // Open dialog with data
  open(data?: DialogData) {
    const overlayRef = this.overlay.create(<OverlayConfig>{
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });
    this.overlayRef = overlayRef;

    const portal = new ComponentPortal(DialogComponent);
    const componentRef = overlayRef.attach(portal);
    componentRef.instance.data = data;

    // Close dialog when backdrop is clicked
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());

    return overlayRef;
  }

  // Close dialog
  close() {
    this.overlayRef?.dispose();
  }
}
