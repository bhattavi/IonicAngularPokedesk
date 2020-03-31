import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokelistPage } from './pokelist.page';

describe('PokelistPage', () => {
  let component: PokelistPage;
  let fixture: ComponentFixture<PokelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
