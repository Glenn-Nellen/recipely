import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Stap2Page } from './stap2.page';

describe('Stap2Page', () => {
  let component: Stap2Page;
  let fixture: ComponentFixture<Stap2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stap2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Stap2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
