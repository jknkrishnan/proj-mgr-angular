import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { ProjectService } from './project.service';

import { Project } from 'src/app/Project';
import { environment } from 'src/environments/environment';

import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

let proj_obj: [{ Project_Id : 1, Project_Name: 1, Start_Date : '01/01/2018',
                 End_Date : '01/02/2018', Priority : 1, Suspend : 0, 
                 Remarks : 'Open', User_Id : 1 }]


describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService,{ provide: XHRBackend, useClass: MockBackend }],
      imports:[HttpClientTestingModule]
    });
  });

   it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));

  it('get project service',  
  inject([ProjectService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Project : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.get().subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Project_Id).toEqual(proj_obj[0].Project_Id);
      expect(result[0].Project_Name).toEqual(proj_obj[0].Project_Name);
      expect(result[0].Start_Date).toEqual(proj_obj[0].Start_Date);
      expect(result[0].End_Date).toEqual(proj_obj[0].End_Date);
      expect(result[0].Priority).toEqual(proj_obj[0].Priority);
      expect(result[0].Priority).toEqual(proj_obj[0].Priority);
      expect(result[0].Suspend).toEqual(proj_obj[0].Suspend);
      expect(result[0].Remarks).toEqual(proj_obj[0].Remarks);
      expect(result[0].User_Id).toEqual(proj_obj[0].User_Id);
    });
}));

it('get project service by id',  
  inject([ProjectService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Project : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.getById(1).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Project_Id).toEqual(proj_obj[0].Project_Id);
      expect(result[0].Project_Name).toEqual(proj_obj[0].Project_Name);
      expect(result[0].Start_Date).toEqual(proj_obj[0].Start_Date);
      expect(result[0].End_Date).toEqual(proj_obj[0].End_Date);
      expect(result[0].Priority).toEqual(proj_obj[0].Priority);
      expect(result[0].Priority).toEqual(proj_obj[0].Priority);
      expect(result[0].Suspend).toEqual(proj_obj[0].Suspend);
      expect(result[0].Remarks).toEqual(proj_obj[0].Remarks);
      expect(result[0].User_Id).toEqual(proj_obj[0].User_Id);
    });
}));

it('post project service by id',  
  inject([ProjectService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Project : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.post(Project).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Project_Id).toEqual(proj_obj[0].Project_Id);
      expect(result[0].Project_Name).toEqual(proj_obj[0].Project_Name);
      expect(result[0].Start_Date).toEqual(proj_obj[0].Start_Date);
      expect(result[0].End_Date).toEqual(proj_obj[0].End_Date);
      expect(result[0].Priority).toEqual(proj_obj[0].Priority);
      expect(result[0].Priority).toEqual(proj_obj[0].Priority);
      expect(result[0].Suspend).toEqual(proj_obj[0].Suspend);
      expect(result[0].Remarks).toEqual(proj_obj[0].Remarks);
      expect(result[0].User_Id).toEqual(proj_obj[0].User_Id);
    });
}));

it('put project service by id',  
  inject([ProjectService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Project : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.post(1,Project).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Project_Id).toEqual(proj_obj[0].Project_Id);
      expect(result[0].Project_Name).toEqual(proj_obj[0].Project_Name);
      expect(result[0].Start_Date).toEqual(proj_obj[0].Start_Date);
      expect(result[0].End_Date).toEqual(proj_obj[0].End_Date);
      expect(result[0].Priority).toEqual(proj_obj[0].Priority);
      expect(result[0].Priority).toEqual(proj_obj[0].Priority);
      expect(result[0].Suspend).toEqual(proj_obj[0].Suspend);
      expect(result[0].Remarks).toEqual(proj_obj[0].Remarks);
      expect(result[0].User_Id).toEqual(proj_obj[0].User_Id);
    });
}));

it('delete project service by id',  
  inject([ProjectService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Project : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.delete(1).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Project_Id).toEqual(proj_obj[0].Project_Id);
      
    });
}));

});
