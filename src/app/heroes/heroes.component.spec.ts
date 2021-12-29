import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES: Hero[];
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'AdhamNiazy', strength: 22 },
      { id: 2, name: 'SpiderMonkey', strength: 5 },
      { id: 3, name: 'HAWK', strength: 12 }
    ]
    // Mocking Up our heroService because we are making Unit Testing not Integration Testing
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  })

  describe('Delete', () => {

    it('should remove the indicated hero from the heroes list', () => {
      // Forcing deleteHero method in our mocking object to return An Observable as we expect in our component
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      let neededTobeDeleted: Hero = HEROES[1];
      let found: boolean = false;

      component.delete(neededTobeDeleted);

      for ( let hero of component.heroes ) {
        if ( hero == neededTobeDeleted )
          found = true;
      }
      expect(found).toBe(false);
    })
  })
})

