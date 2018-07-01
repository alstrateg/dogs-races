import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DogsService } from './dogs-races.service';

@Component({
    selector: 'app-remove-dog',
    templateUrl: './remove-dog.component.html',
    // styleUrls: ['./name.component.scss']
})
export class RemoveDogComponent {
    @Input() dogId: number;
    @Output() deleted = new EventEmitter<number>();
    constructor(private dogsService: DogsService) { }

    RemoveDog(){
        if(this.dogId){
            this.dogsService.removeDog(this.dogId)
            .subscribe(
                res => {
                    this.deleted.emit(this.dogId)
                }
            ) 
        }
    }
}
