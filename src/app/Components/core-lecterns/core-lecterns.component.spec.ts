import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLecternsComponent } from './core-lecterns.component';

describe('CoreLecternsComponent', () => {
  let component: CoreLecternsComponent;
  let fixture: ComponentFixture<CoreLecternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreLecternsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreLecternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
