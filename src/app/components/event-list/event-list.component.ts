import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from "../../shared/services/event.service";
import { EventItem } from "../../shared/models/event-item.interface";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit, OnDestroy {

    events!: EventItem[];
    event$!: Subscription;

    constructor(private readonly eventService: EventService) {

    }

    ngOnInit(): void {
        this.event$ = this.eventService
            .getEvents()
            .subscribe((events: EventItem[]) => this.events = events);
    }

    ngOnDestroy(): void {
        this.event$.unsubscribe();
    }

}
