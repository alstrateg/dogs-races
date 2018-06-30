import { Component, OnInit } from '@angular/core';
import { Dog, Race, DogsService } from './dogs-races.service';

@Component({
    selector: 'app-list-dogs',
    templateUrl: './list-dogs.component.html',
    // styleUrls: ['./list-dogs.component.scss']
})
export class ListDogsComponent implements OnInit {
    dogs: Dog[];
    races: Race[];

    constructor(private dogsService: DogsService) { }

    ngOnInit() {
        this.getDogs();
        this.getRaces();
    }

    getDogs(): void {
        this.dogsService.getDogs()
        .subscribe(dogs => this.dogs = dogs)
    }

    getRaces(): void {
        this.dogsService.getRaces()
        .subscribe(races => this.races = races)
    }

    getRace(id: number) {
        if(this.races) {
            return this.races.find( race => race.id == id ).name
        }
    }
}
