import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCenterComponent } from './core-center.component';

describe('CoreCenterComponent', () => {
  let component: CoreCenterComponent;
  let fixture: ComponentFixture<CoreCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
