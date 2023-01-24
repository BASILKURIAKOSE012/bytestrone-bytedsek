import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestResolveComponent } from './user-request-resolve.component';

describe('UserRequestResolveComponent', () => {
  let component: UserRequestResolveComponent;
  let fixture: ComponentFixture<UserRequestResolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestResolveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
