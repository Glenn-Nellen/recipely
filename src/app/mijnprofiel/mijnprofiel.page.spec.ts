import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MijnprofielPage } from './mijnprofiel.page';

describe('MijnprofielPage', () => {
  let component: MijnprofielPage;
  let fixture: ComponentFixture<MijnprofielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MijnprofielPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MijnprofielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
