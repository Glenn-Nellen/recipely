import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FishrecipesPage } from './fishrecipes.page';

describe('FishrecipesPage', () => {
  let component: FishrecipesPage;
  let fixture: ComponentFixture<FishrecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishrecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FishrecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
