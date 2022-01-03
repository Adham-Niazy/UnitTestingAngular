import { ComponentFixture, TestBed } from "@angular/core/testing"
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent (Shallow Test)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES: Hero[];
  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'AdhamNiazy', strength: 22 },
      { id: 2, name: 'SpiderMonkey', strength: 5 },
      { id: 3, name: 'HAWK', strength: 12 }
    ]
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ]
    })

    fixture = TestBed.createComponent(HeroesComponent);
  })

  it('Should set heroes correctly from the service', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();

    expect(fixture.componentInstance.heroes).toBe(HEROES);
  })
})
