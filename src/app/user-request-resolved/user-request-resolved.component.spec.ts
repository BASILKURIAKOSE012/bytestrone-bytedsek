import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestResolvedComponent } from './user-request-resolved.component';

describe('UserRequestResolvedComponent', () => {
  let component: UserRequestResolvedComponent;
  let fixture: ComponentFixture<UserRequestResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestResolvedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
