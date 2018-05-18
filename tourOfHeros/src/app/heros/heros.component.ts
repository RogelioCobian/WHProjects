import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from './../services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HeroComponent implements OnInit {
  public heros: Hero[];
  public selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
     this.heroService.getHeros().subscribe((herosFromObservable) => {
       this.heros = herosFromObservable;
     });
     console.log(this.heros);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
