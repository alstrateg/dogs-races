import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


//TODO: create separete file for interface
export class Dog {
    id: number;
    name: string;
    age: number;
    race: number;
}

export class DogAndRace {
    id: number;
    name: string;
    age: number;
    race: string;
}

export class Race {
    id: number;
    name: string;
}

@Injectable()
export class DogsService {

    private dogsUrl = 'http://localhost:3000/dogs';
    private racesUrl = 'http://localhost:3000/races';

    constructor(private http: HttpClient) { }

    getDogs(): Observable<Dog[]> {
        return this.http.get<Dog[]>(this.dogsUrl)
            .pipe(
                tap(dogs => this.log(`fetched dogs`)),
                catchError(this.handleError('getDogs', []))
            );
    }

    getRaces(): Observable<Race[]> {
        return this.http.get<Race[]>(this.racesUrl)
            .pipe(
                tap(races => this.log(`fetched races`)),
                catchError(this.handleError('getRaces', []))
            );
    }

    getDog(id: number): Observable<Dog> {
        const url = `${this.dogsUrl}/${id}`;
        return this.http.get<Dog>(url).pipe(
            tap(_ => this.log(`fetched dog id=${id}`)),
            catchError(this.handleError<Dog>(`getDog id=${id}`))
        );
    }

    //////// Save methods //////////

    /** POST: add a new dog to the server */
    addDog(dog: Dog): Observable<Dog> {
        return this.http.post<Dog>(this.dogsUrl, dog, httpOptions).pipe(
            tap((dog: Dog) => this.log(`added dog w/ id=${dog.id}`)),
            catchError(this.handleError<Dog>('addDog'))
        );
    }

    /** DELETE: delete the dog from the server */
    removeDog(dog: Dog | number): Observable<Dog> {
        const id = typeof dog === 'number' ? dog : dog.id;
        const url = `${this.dogsUrl}/${id}`;

        return this.http.delete<Dog>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted dog id=${id}`)),
            catchError(this.handleError<Dog>('deleteDog'))
        );
    }

    /** PUT: update the dog on the server */
    updateDog(dog: Dog): Observable<any> {
        const id = typeof dog === 'number' ? dog : dog.id;
        const url = `${this.dogsUrl}/${id}`;

        return this.http.put(url, dog, httpOptions).pipe(
            tap(_ => this.log(`updated dog id=${dog.id}`)),
            catchError(this.handleError<any>('updateDog'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message);
    }

}