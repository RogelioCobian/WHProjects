import { Injectable } from '@angular/core';
import { HEROS } from './../mock-heros';
import { Hero } from './../hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  public getHeros(): Observable<Hero[]> {
    return of (HEROS); // <-----this Returns our list of heros to anyone who calls this method
    // getHeros()
  }

}
