import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component";

describe('HeroComponent (Shallow Tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      // For hiding non-relating errors (but) use it well.
      // schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'AdhamNiazy', strength: 30 };

    expect(fixture.componentInstance.hero.name).toEqual('AdhamNiazy');
  })

  it('should render the hero name in an anchor tag', () => {
    // Setting the property manually doesn't mean that this component will feel the change
    fixture.componentInstance.hero = { id: 1, name: 'AdhamNiazy', strength: 30 };
    // So I should manually make angular detect the changes
    fixture.detectChanges();
    // This is the same as the one below but those are different approaches
    expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('AdhamNiazy');

    // expect(fixture.nativeElement.querySelector('a').textContent).toContain('AdhamNiazy');
  })
})

