import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UitloggenPage } from './uitloggen.page';

describe('UitloggenPage', () => {
  let component: UitloggenPage;
  let fixture: ComponentFixture<UitloggenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UitloggenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UitloggenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
