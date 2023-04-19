import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { EventItem } from "../../../shared/models/event-item.interface";
import { EventService } from "../../../shared/services/event.service";

@Component({
    selector: 'app-event-list-item',
    templateUrl: './event-list-item.html',
    styleUrls: ['./event-list-item.css'],
    encapsulation: ViewEncapsulation.Emulated,
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListItemComponent implements OnInit, OnDestroy {

    @Input()
    event!: EventItem;
    remainingTime: number = 0;

    constructor(private readonly eventService: EventService) {
    }

    ngOnInit(): void {
        this.remainingTime = setInterval(() => {

            if (this.event.date.getTime() <= Date.now()) {
                this.remainingTime = -1;
                clearInterval(this.remainingTime);
                return;
            }

            this.remainingTime = this.event.date.getTime() - Date.now();
        }, 1000);

    }

    ngOnDestroy(): void {
        clearInterval(this.remainingTime);
    }

    removeEvent(): boolean {
        return this.eventService.deleteEvent(this.event);
    }

}
