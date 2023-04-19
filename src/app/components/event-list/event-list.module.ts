import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from "./event-list.component";
import { EventListItemComponent } from "./event-list-item/event-list-item";
import { RemainingTimeStrPipe } from "./event-list-item/RemainingTimeStr.pipe";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        EventListComponent,
        EventListItemComponent,
        RemainingTimeStrPipe
    ],
    imports: [
        CommonModule,
        MatButtonModule
    ],
    exports: [
        EventListComponent,
        EventListItemComponent
    ],
})
export class EventListModule {
}
