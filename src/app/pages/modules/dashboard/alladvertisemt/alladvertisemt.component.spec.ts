import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlladvertisemtComponent } from './alladvertisemt.component';

describe('AlladvertisemtComponent', () => {
  let component: AlladvertisemtComponent;
  let fixture: ComponentFixture<AlladvertisemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlladvertisemtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlladvertisemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
