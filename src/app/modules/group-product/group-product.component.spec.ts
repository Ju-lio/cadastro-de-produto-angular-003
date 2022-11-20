import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupProductComponent } from './group-product.component';

describe('GroupProductComponent', () => {
  let component: GroupProductComponent;
  let fixture: ComponentFixture<GroupProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
