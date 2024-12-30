import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAdvertismentComponent } from './open-advertisment.component';

describe('OpenAdvertismentComponent', () => {
  let component: OpenAdvertismentComponent;
  let fixture: ComponentFixture<OpenAdvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAdvertismentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
