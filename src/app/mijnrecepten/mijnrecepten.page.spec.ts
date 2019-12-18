import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MijnreceptenPage } from './mijnrecepten.page';

describe('MijnreceptenPage', () => {
  let component: MijnreceptenPage;
  let fixture: ComponentFixture<MijnreceptenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MijnreceptenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MijnreceptenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
