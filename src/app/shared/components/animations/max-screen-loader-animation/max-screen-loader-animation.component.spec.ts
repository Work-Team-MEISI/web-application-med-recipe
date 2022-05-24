import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxScreenLoaderAnimationComponent } from './max-screen-loader-animation.component';

describe('MaxScreenLoaderAnimationComponent', () => {
  let component: MaxScreenLoaderAnimationComponent;
  let fixture: ComponentFixture<MaxScreenLoaderAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxScreenLoaderAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxScreenLoaderAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
