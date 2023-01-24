import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestClosedComponent } from './user-request-closed.component';

describe('UserRequestClosedComponent', () => {
  let component: UserRequestClosedComponent;
  let fixture: ComponentFixture<UserRequestClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestClosedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
