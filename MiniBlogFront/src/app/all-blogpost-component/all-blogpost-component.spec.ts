import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogpostComponent } from './all-blogpost-component';

describe('AllBlogpostComponent', () => {
  let component: AllBlogpostComponent;
  let fixture: ComponentFixture<AllBlogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllBlogpostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBlogpostComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
