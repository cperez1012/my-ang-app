import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isAuthenticated to false', () => {
    expect(component.isAuthenticated).toBeFalse();
  });

  it('should change isAuthenticated to true on successful login', () => {
    // Simulate a successful login
    component.isAuthenticated = false;
    // Call the login method or perform the necessary actions to simulate a successful login
    component.login();
    expect(component.isAuthenticated).toBeTrue();
  });

  it('should log out and set isAuthenticated to false', () => {
    // Simulate a logged-in state
    component.isAuthenticated = true;
    // Call the logout method or perform the necessary actions to simulate a logout
    component.logout();
    expect(component.isAuthenticated).toBeFalse();
  });
});
