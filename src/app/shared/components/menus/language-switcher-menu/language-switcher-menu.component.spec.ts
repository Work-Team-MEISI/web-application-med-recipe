import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherMenuComponent } from './language-switcher-menu.component';

describe('LanguageSwitcherMenuComponent', () => {
  let component: LanguageSwitcherMenuComponent;
  let fixture: ComponentFixture<LanguageSwitcherMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSwitcherMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSwitcherMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
