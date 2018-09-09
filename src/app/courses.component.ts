import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    {{ text | summary:10 }}
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)" >Save</button>
        </div>
    `
})
export class CoursesComponent {
    isActive = true;
    email = "not@meme.com";
    text = `adwaq awdawd adawd dawdaw sd wedwew adsdw adsd wewe asdaq qwe hello hi wahat how are you doing????`;

    constructor(service: CoursesService) {
    }

    onKeyUp() {
        console.log(this.email);
    }

    onSave($event) {
        $event.stopPropagation();

        console.log("Button was clicked", $event);
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    // Logic for calling an HTTP service
}