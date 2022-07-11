import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContadorComponent } from './app-contador.component';

describe('AppContadorComponent', () => {
  let component: AppContadorComponent;
  let fixture: ComponentFixture<AppContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
