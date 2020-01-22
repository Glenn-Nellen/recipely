import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StappenPage } from './stappen.page';

describe('StappenPage', () => {
  let component: StappenPage;
  let fixture: ComponentFixture<StappenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StappenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StappenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
