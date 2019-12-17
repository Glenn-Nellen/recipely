import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeatrecipesPage } from './meatrecipes.page';

describe('MeatrecipesPage', () => {
  let component: MeatrecipesPage;
  let fixture: ComponentFixture<MeatrecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatrecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeatrecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
