import {Component} from '@angular/core';
import {CustomSelectOptionComponent} from "./CustomSelectOptionComponent";
import {CustomSelectComponent} from "./CustomSelectComponent";
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {A11yModule} from '@angular/cdk/a11y';

//https://spin.atomicobject.com/2022/12/20/angular-cdk-overlay/
@Component({
  selector: 'Overlay2Comp',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    A11yModule,
    CustomSelectOptionComponent,
    CustomSelectComponent
  ],
  providers: [],
  template: `
    <div class="select-container">
      <custom-select
        id="test-id"
        label="Label"
        placeholder="Placeholder text"
        [(ngModel)]="testModel"
      >
        <custom-select-option [value]="{ value: 'select option', letter: 'a' }"
        >A select option</custom-select-option
        >
        <custom-select-option value="Iconic options"
        ><span class="material-icons" style="color:green">face</span> Iconic
          options</custom-select-option
        >
        <custom-select-option value="Disabled option" [disabled]="true"
        >Disabled option</custom-select-option
        >
        <custom-select-option value="Even more"
        >Even more options</custom-select-option
        >
        <custom-select-option value="More disabled" [disabled]="true"
        >More disabled options</custom-select-option
        >
        <custom-select-option value="More after that"
        >More options after that</custom-select-option
        >
        <custom-select-option value="Tons">Tons of options</custom-select-option>
        <custom-select-option value="Too many"
        >Tons many to pick from</custom-select-option
        >
        <custom-select-option value="Totally filled"
        >Totally filled with options</custom-select-option
        >
      </custom-select>

      <div>Selected: {{ testModel }}</div>
    </div>

  `,
  styles: `
.select-container {
  width: 90%;
  height: 100vh;
}

  `
})
export class Overlay2Comp {

  public testModel!: any;
  constructor() {

  }


}
