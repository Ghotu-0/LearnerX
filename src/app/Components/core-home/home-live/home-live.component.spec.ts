import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLiveComponent } from './home-live.component';

describe('HomeLiveComponent', () => {
  let component: HomeLiveComponent;
  let fixture: ComponentFixture<HomeLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
