import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'edit-dog',
    templateUrl: './edit-dog.component.html',
    // styleUrls: ['./edit-dog.component.scss']
})
export class EditDogComponent implements OnInit {
    constructor() {
        console.log("Edit dog")
     }

    ngOnInit(): void { }
}
