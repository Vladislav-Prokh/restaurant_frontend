import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RoleGuard } from './role.guard';
import { AuthComponent } from './auth.component';
import { Router } from '@angular/router';

describe('RoleGuard', () => {
  let roleGuard: RoleGuard;
  let authService: AuthComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RoleGuard, AuthComponent]
    });
    roleGuard = TestBed.inject(RoleGuard);
    authService = TestBed.inject(AuthComponent);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(roleGuard).toBeTruthy();
  });

  it('should allow access if role matches', () => {
    // @ts-ignore
    spyOn(authService, 'getRole').and.returnValue('ADMIN');
    const canActivate = roleGuard.canActivate(
      { data: { roles: ['ADMIN'] } } as any,
      {} as any
    );
    expect(canActivate).toBe(true);
  });

  it('should deny access if role does not match', () => {
    // @ts-ignore
    spyOn(authService, 'getRole').and.returnValue('DEFAULT');
    const canActivate = roleGuard.canActivate(
      { data: { roles: ['ADMIN'] } } as any,
      {} as any
    );
    expect(canActivate).toBe(false);
  });
});
