import { TestBed } from '@angular/core/testing';

import { InformationModalService } from './information-modal.service';

describe('InformationModalService', () => {
  let service: InformationModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
