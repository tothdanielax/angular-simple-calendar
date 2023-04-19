import { AbstractControl, ValidationErrors } from "@angular/forms";

export function isDate(control: AbstractControl): ValidationErrors | null {
    if (control.value === null) {
        return null;
    }

    const date: Date = new Date(control.value);

    return date ? null : {invalidDate: true};
}