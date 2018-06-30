import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list-dogs',
    templateUrl: './list-dogs.component.html',
    // styleUrls: ['./list-dogs.component.scss']
})
export class ListDogsComponent implements OnInit {
    constructor() {
        console.log("Dogs List")
     }

    ngOnInit(): void { }
}
