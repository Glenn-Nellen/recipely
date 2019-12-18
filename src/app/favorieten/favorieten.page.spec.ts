import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavorietenPage } from './favorieten.page';

describe('FavorietenPage', () => {
  let component: FavorietenPage;
  let fixture: ComponentFixture<FavorietenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorietenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavorietenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
