import { Dog, Race, DogsService } from "../dogs-races.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { defer } from 'rxjs';

function getTestDogs(): Dog[] {
    return [
        { id: 41, name: 'Bob', age: 3, race: 1 },
        { id: 42, name: 'Ted', age: 1, race: 2 },
        { id: 43, name: 'Sid', age: 4, race: 1 },
        { id: 44, name: 'Steam', age: 99, race: 3 }
    ];
}

function getTestRaces(): Race[] {
    return [
        { id: 1, name: 'Race1' },
        { id: 2, name: 'Race2' },
        { id: 3, name: 'Race3' },
    ]
}

function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}


@Injectable()
/**
 * FakeHeroService pretends to make real http requests.
 * implements only as much of HeroService as is actually consumed by the app
*/
export class TestDogsService extends DogsService {
    constructor() {
        super(null);
    }

    dogs = getTestDogs();
    races = getTestRaces();
    lastResult: Observable<any>; // result from last method call

    getDogs(): Observable<Dog[]> {
        return this.lastResult = asyncData(this.dogs);
    }

    getRaces(): Observable<Race[]> {
        return this.lastResult = asyncData(this.races);
    }
}