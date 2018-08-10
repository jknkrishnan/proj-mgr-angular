import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { ProjectService } from './project.service';

import { Project } from 'src/app/Project';
import { environment } from 'src/environments/environment';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService],
      imports:[HttpClientTestingModule]
    });
  });

   it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
