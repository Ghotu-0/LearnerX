import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreToolsComponent } from './core-tools.component';

describe('CoreToolsComponent', () => {
  let component: CoreToolsComponent;
  let fixture: ComponentFixture<CoreToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
