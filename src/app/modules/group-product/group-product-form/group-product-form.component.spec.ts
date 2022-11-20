import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupProductFormComponent } from './group-product-form.component';

describe('GroupProductFormComponent', () => {
  let component: GroupProductFormComponent;
  let fixture: ComponentFixture<GroupProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupProductFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
