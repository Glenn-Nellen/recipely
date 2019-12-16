import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Stap4Page } from './stap4.page';

describe('Stap4Page', () => {
  let component: Stap4Page;
  let fixture: ComponentFixture<Stap4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stap4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Stap4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
