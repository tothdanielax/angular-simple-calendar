import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { EventListModule } from "./components/event-list/event-list.module";
import { SharedModule } from "./shared/shared.module";

const materialModules = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
];

@NgModule({
    declarations: [
        AppComponent,
        CreateFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ...materialModules,
        EventListModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
