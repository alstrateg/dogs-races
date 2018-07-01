import { Component, OnInit } from '@angular/core';
import { DogsService, Dog } from './dogs-races.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-edit-dog',
    templateUrl: './edit-dog.component.html',
    // styleUrls: ['./edit-dog.component.scss']
})
export class EditDogComponent implements OnInit {
    constructor(private dogsService: DogsService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getRaces()
        this.route.paramMap.subscribe((params: ParamMap) => {
            let id:number = parseInt(params.get('id'));
            this.dogsService.getDog(id)
            .subscribe(dog => this.model = dog)
        })
    }

    races = []
    model = new Dog()//new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    getRaces() {
        this.dogsService.getRaces()
            .subscribe(races => this.races = races)
    }
    cancel() {
        this.router.navigate(['/dogs'])
    }

    onSubmit() {
        if(!this.model.id) {
            this.model.id = Math.round(Math.random() * 99)
            this.dogsService.addDog(this.model)
            .subscribe(
                res => {
                    this.router.navigate(['/dogs'])
                }
            )
        } else {
            this.dogsService.updateDog(this.model)
            .subscribe(
                res => {
                    this.router.navigate(['/dogs'])
                }
            )
        }
        
    }
}
