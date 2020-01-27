import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NieuwwachtwoordPage } from './nieuwwachtwoord.page';

describe('NieuwwachtwoordPage', () => {
  let component: NieuwwachtwoordPage;
  let fixture: ComponentFixture<NieuwwachtwoordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwwachtwoordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NieuwwachtwoordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
