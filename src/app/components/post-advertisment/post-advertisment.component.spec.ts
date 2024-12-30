import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdvertismentComponent } from './post-advertisment.component';

describe('PostAdvertismentComponent', () => {
  let component: PostAdvertismentComponent;
  let fixture: ComponentFixture<PostAdvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdvertismentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
