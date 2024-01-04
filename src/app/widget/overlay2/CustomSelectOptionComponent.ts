import {Component, HostBinding, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {OverlayModule} from "@angular/cdk/overlay";
import {PortalModule} from "@angular/cdk/portal";
import {A11yModule} from "@angular/cdk/a11y";

@Component({
  selector: 'custom-select-option',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./CustomSelectOptionComponent.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    A11yModule],
  host: {
    role: 'listbox',
    '[attr.aria-label]': 'value',
  },
})
export class CustomSelectOptionComponent {
  @Input()
  public value!: any;

  @HostBinding('class.disabled')
  @Input()
  public disabled = false;
}
