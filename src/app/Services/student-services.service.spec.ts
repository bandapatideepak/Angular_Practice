import { TestBed, inject } from '@angular/core/testing';

import { StudentServicesService } from './student-services.service';

describe('StudentServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentServicesService]
    });
  });

  it('should be created', inject([StudentServicesService], (service: StudentServicesService) => {
    expect(service).toBeTruthy();
  }));
});
