import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

    /*
    selectedHero?: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
        //this.messageService.add("HeroesComponent: Selected hero id=" + hero.id);
    }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }*/

    heroes?: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    //Asincrono
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
}
