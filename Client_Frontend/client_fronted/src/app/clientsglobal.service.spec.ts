import { TestBed } from '@angular/core/testing';

import { ClientsglobalService } from './clientsglobal.service';

describe('ClientsglobalService', () => {
  let service: ClientsglobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsglobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
