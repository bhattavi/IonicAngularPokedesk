import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokecardsPage } from './pokecards.page';

describe('PokecardsPage', () => {
  let component: PokecardsPage;
  let fixture: ComponentFixture<PokecardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokecardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokecardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
