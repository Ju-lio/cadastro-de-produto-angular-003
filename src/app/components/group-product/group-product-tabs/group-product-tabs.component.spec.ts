import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupProductTabsComponent } from './group-product-tabs.component';

describe('GroupProductTabsComponent', () => {
   let component: GroupProductTabsComponent;
   let fixture: ComponentFixture<GroupProductTabsComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [GroupProductTabsComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(GroupProductTabsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
