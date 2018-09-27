import {PilotValidators} from './pilot-validators';
import {FormControl} from '@angular/forms';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';

describe('PilotValidators', () => {

  describe('startsWithCapitalLetter', function () {

    it('should pass if value = empty string', () => {
      const formControl = new FormControl('');
      const validationResult = PilotValidators.startsWithCapitalLetter(formControl);
      expect(validationResult).toBeNull();
    });

    it('should fail if value does not start with a capital letter', () => {
      const formControl = new FormControl('bulak');
      const validationResult = PilotValidators.startsWithCapitalLetter(formControl);
      expect(validationResult).toEqual({name: true});
    });

    it('should pass if value starts with a capital letter', () => {
      const formControl = new FormControl('Bulak');
      const validationResult = PilotValidators.startsWithCapitalLetter(formControl);
      expect(validationResult).toBeNull();
    });
  });

  describe('forbiddenName', function () {

    it('should pass if value = empty string', () => {
      spyOn(ajax, 'get').and.returnValue(of({response: ['Ciamajda']}));
      const formControl = new FormControl('');
      const validationResult = PilotValidators.forbiddenName(formControl);
      PilotValidators.forbiddenName(formControl)
        .subscribe((result) => expect(result).toEqual(null));
    });

    it('should fail if value is forbidden name', () => {
      spyOn(ajax, 'get').and.returnValue(of({response: ['Ciamajda']}));
      const formControl = new FormControl('Ciamajda');
      const validationResult = PilotValidators.forbiddenName(formControl);
      PilotValidators.forbiddenName(formControl)
        .subscribe((result) => expect(result).toEqual({forbiddenName: true}));
    });

    it('should pass if value is not forbidden name', () => {
      spyOn(ajax, 'get').and.returnValue(of({response: ['Kapusta']}));
      const formControl = new FormControl('');
      PilotValidators.forbiddenName(formControl)
        .subscribe((result) => expect(result).toEqual(null));
    });
  });
});
