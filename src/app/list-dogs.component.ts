import { Component, OnInit } from '@angular/core';
import { DogAndRace, DogsService } from './dogs-races.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-list-dogs',
    templateUrl: './list-dogs.component.html',
    // styleUrls: ['./list-dogs.component.scss']
})
export class ListDogsComponent implements OnInit {
    dogsAndRace: DogAndRace[] = [];

    constructor(private dogsService: DogsService) { }

    ngOnInit() {
        this.getDogsAndRaces();
    }

    getDogsAndRaces() {
        forkJoin(
            this.dogsService.getDogs(),
            this.dogsService.getRaces()
        )
            .subscribe(
                ([dogs, races]) => {
                    dogs.forEach(dog => this.dogsAndRace.push({
                        id: dog.id, 
                        name: dog.name, 
                        age: dog.age, 
                        race: races.find(race => race.id == dog.race).name
                    }))
                }
            )
    }
}
