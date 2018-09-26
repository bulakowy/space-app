import {FormControl} from '@angular/forms';
import {ajax} from 'rxjs/ajax';
import {filter, map} from 'rxjs/operators';

export class PilotValidators {
  static startsWithCapitalLetter(formControl: FormControl) {
    return !formControl.value || /^[A-Z]/.test(formControl.value) ? null : {name: true};
  }

  static forbiddenName(formControl: FormControl) {
    const url = `/api/forbiddenNames`;
    return ajax.get(url).pipe(
      map((ajaxResponse) => ajaxResponse.response.filter((n) => n === formControl.value)),
      map((forbiddenNames) => forbiddenNames.length > 0 ? {forbiddenName: true} : null)
    );
  }
}
