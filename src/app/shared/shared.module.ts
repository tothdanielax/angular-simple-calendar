import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from "./services/event.service";


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [EventService],
    exports: []
})
export class SharedModule {
}
