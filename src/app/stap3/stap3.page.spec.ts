import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Stap3Page } from './stap3.page';

describe('Stap3Page', () => {
  let component: Stap3Page;
  let fixture: ComponentFixture<Stap3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stap3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Stap3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
