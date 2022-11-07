import { TestBed } from '@angular/core/testing';

import { GroupProductService } from './group-product.service';

describe('GroupProductService', () => {
  let service: GroupProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
