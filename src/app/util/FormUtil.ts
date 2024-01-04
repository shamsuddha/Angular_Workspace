import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

export const toFaGfn = (fa: any) => {
  return fa as FormArray;
}
