import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceptPage } from './recept.page';

describe('ReceptPage', () => {
  let component: ReceptPage;
  let fixture: ComponentFixture<ReceptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
