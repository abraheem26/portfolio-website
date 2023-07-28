import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImageScreenComponent } from './home-image-screen.component';

describe('HomeImageScreenComponent', () => {
  let component: HomeImageScreenComponent;
  let fixture: ComponentFixture<HomeImageScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImageScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeImageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
