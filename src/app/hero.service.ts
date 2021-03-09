import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //Sincrono
  /*getHeroes(): Hero[] {
      return HEROES;
  }*/

  //Asincrono
  getHeroes(): Observable<Hero[]> {
      return of(HEROES);
  }

}