import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskAddPage } from './task-add.page';

describe('TaskAddPage', () => {
  let component: TaskAddPage;
  let fixture: ComponentFixture<TaskAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
