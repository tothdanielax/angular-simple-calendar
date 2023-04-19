import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from "../../shared/services/event.service";
import { isDate } from "./validators/isDate.validator";

@Component({
    selector: 'app-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFormComponent {

    createEventForm: FormGroup = this.fb.group({
        newEvent: ['',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)]
        ],
        newEventDate: ['',
            [
                Validators.required,
                isDate
            ]
        ]
    });

    constructor(private readonly fb: FormBuilder,
                private readonly eventService: EventService) {
    }

    handleFormSubmit(): void {
        if (this.createEventForm.invalid) return;

        const title: string = this.createEventForm.get('newEvent')?.value;
        const date: Date = new Date(this.createEventForm.get('newEventDate')?.value);

        this.eventService.addEvent({title, date});
    }

}
