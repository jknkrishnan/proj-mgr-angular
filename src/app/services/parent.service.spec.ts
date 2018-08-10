import { TestBed, inject } from '@angular/core/testing';

import { ParentService } from './parent.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';


import { Parent } from 'src/app/Parent';
import { environment } from 'src/environments/environment';

describe('ParentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([ParentService], (service: ParentService) => {
    expect(service).toBeTruthy();
  }));
});
