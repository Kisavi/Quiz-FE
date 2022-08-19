import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionChoicesComponent } from './question-choices.component';

describe('QuestionChoicesComponent', () => {
  let component: QuestionChoicesComponent;
  let fixture: ComponentFixture<QuestionChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionChoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
