import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarExtrasComponent } from './sidebar-extras.component';

describe('SidebarExtrasComponent', () => {
  let component: SidebarExtrasComponent;
  let fixture: ComponentFixture<SidebarExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
