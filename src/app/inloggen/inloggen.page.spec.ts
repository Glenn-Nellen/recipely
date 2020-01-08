import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InloggenPage } from './inloggen.page';

describe('InloggenPage', () => {
  let component: InloggenPage;
  let fixture: ComponentFixture<InloggenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InloggenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InloggenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
