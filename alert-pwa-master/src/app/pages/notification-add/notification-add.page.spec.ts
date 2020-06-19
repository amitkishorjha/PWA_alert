import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationAddPage } from './notification-add.page';

describe('NotificationAddPage', () => {
  let component: NotificationAddPage;
  let fixture: ComponentFixture<NotificationAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
