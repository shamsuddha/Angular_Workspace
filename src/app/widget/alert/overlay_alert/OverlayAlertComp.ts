import {Component} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'OverlayAlertComp',
  standalone: true,
  imports: [
    OverlayModule
  ],
  template: `
    <div cdkOverlayOrigin #originOverlay="cdkOverlayOrigin">
      <input placeholder="start type" (focus)="focusFn($event)"
             (focusout)="focusOutFn()"/>
    </div>

    <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="originOverlay"
                 [cdkConnectedOverlayOpen]="isPanelVisible">
      <ul>
        <li> user 1</li>
        <li> user 2</li>
      </ul>
    </ng-template>
  `,
  styles: `

  `
})
export class OverlayAlertComp {

  isPanelVisible: boolean = false;

  constructor() {

    /*const overlayRef = overlay.create({
      height: '400px',
      width: '600px',
    });
    const userProfilePortal = new ComponentPortal(UserProfile);
    overlayRef.attach(userProfilePortal);*/

  }

  focusFn($event:FocusEvent) {
    console.log($event)
    this.isPanelVisible = true
  }

  focusOutFn() {
    this.isPanelVisible = false
  }
}
