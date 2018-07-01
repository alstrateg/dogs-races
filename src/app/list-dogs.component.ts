import { Component, OnInit } from '@angular/core';
import { DogAndRace, DogsService } from './dogs-races.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-dogs',
    templateUrl: './list-dogs.component.html',
    styleUrls: ['./list-dogs.component.scss']
})
export class ListDogsComponent implements OnInit {
    dogsAndRace: DogAndRace[] = [];
    isLoading = true;
    hasError = false;

    constructor(private dogsService: DogsService, private router: Router) { }

    ngOnInit() {
        this.getDogsAndRaces();
    }

    editDog(dogId: string){
        this.router.navigate(['/dogs/edit/' + dogId])
    }

    onDelete(dogId: number) {
        this.dogsAndRace = this.dogsAndRace.filter(dog => dog.id != dogId)
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
                    this.isLoading = false
                },
                error => {
                    console.log(error)
                    if(error) {
                        this.hasError = true;    
                    }
                }
            )
    }
}
