import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeganrecipesPage } from './veganrecipes.page';

describe('VeganrecipesPage', () => {
  let component: VeganrecipesPage;
  let fixture: ComponentFixture<VeganrecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeganrecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeganrecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
