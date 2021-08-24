import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLectureComponent } from './home-lecture.component';

describe('HomeLectureComponent', () => {
  let component: HomeLectureComponent;
  let fixture: ComponentFixture<HomeLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
