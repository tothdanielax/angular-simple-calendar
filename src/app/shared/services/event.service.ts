import { EventItem } from "../models/event-item.interface";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class EventService {

    private mockEvents: EventItem[] = [
        {
            title: 'Event 1',
            date: new Date(Date.now() + (60 * 60 * 1000)) // 1 hour ahead
        },
        {
            title: 'Event 2',
            date: new Date(Date.now() + (60 * 60 * 1000 * 2)) // 2 hour ahead
        }
    ];


    getEvents(): Observable<EventItem[]> {
        return of(this.mockEvents);
    }

    addEvent(event: EventItem): boolean {
        this.mockEvents.push(event);
        return true;
    }

    deleteEvent(event: EventItem): boolean {
        const index = this.mockEvents.indexOf(event);
        if (index > -1) {
            this.mockEvents.splice(index, 1);
            return true;
        }
        return false;
    }
}
