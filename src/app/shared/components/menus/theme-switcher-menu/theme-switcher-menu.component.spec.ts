import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitcherMenuComponent } from './theme-switcher-menu.component';

describe('ThemeSwitcherMenuComponent', () => {
  let component: ThemeSwitcherMenuComponent;
  let fixture: ComponentFixture<ThemeSwitcherMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSwitcherMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSwitcherMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
