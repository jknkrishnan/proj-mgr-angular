import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { TaskService } from './task.service';

import { Task } from 'src/app/Task';
import { environment } from 'src/environments/environment';

import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

let obj: [{ Task_Id: 1, Parent_Id: 1, TaskDesc : 't1', StartDate : '01/01/2018',
            EndDate : '01/02/2018', Priority : 1, Status : 'Open', 
            Project_Id : 1, User_Id : 1 }]

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService,        
        { provide: XHRBackend, useClass: MockBackend }],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  it('get task service',  
    inject([TaskService,XHRBackend], (service,mockBackend) => {
      const mockResponse = {
        Task : obj
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      
      service.get().subscribe((result) => {
        expect(result.length).toBeGreaterThan(0);    
        expect(result[0].Task_Id).toEqual(obj[0].Task_Id);
        expect(result[0].Parent_Id).toEqual(obj[0].Parent_Id);
        expect(result[0].TaskDesc).toEqual(obj[0].TaskDesc);
        expect(result[0].StartDate).toEqual(obj[0].StartDate);
        expect(result[0].EndDate).toEqual(obj[0].EndDate);
        expect(result[0].Priority).toEqual(obj[0].Priority);
        expect(result[0].Status).toEqual(obj[0].Status);
        expect(result[0].Project_Id).toEqual(obj[0].Project_Id);
        expect(result[0].User_Id).toEqual(obj[0].User_Id);
      });
  }));

  it('get by id task service',  
    inject([TaskService,XHRBackend], (service,mockBackend) => {
      const mockResponse = {
        Task : obj
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      
      service.getById(1).subscribe((result) => {
        expect(result.length).toBeGreaterThan(0);    
        expect(result[0].Task_Id).toEqual(obj[0].Task_Id);
        expect(result[0].Parent_Id).toEqual(obj[0].Parent_Id);
        expect(result[0].TaskDesc).toEqual(obj[0].TaskDesc);
        expect(result[0].StartDate).toEqual(obj[0].StartDate);
        expect(result[0].EndDate).toEqual(obj[0].EndDate);
        expect(result[0].Priority).toEqual(obj[0].Priority);
        expect(result[0].Status).toEqual(obj[0].Status);
        expect(result[0].Project_Id).toEqual(obj[0].Project_Id);
        expect(result[0].User_Id).toEqual(obj[0].User_Id);
      });
  }));

  it('post task test service',  
  inject([TaskService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Task : obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.post(Task).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);    
      expect(result[0].Task_Id).toEqual(obj[0].Task_Id);
      expect(result[0].Parent_Id).toEqual(obj[0].Parent_Id);
      expect(result[0].TaskDesc).toEqual(obj[0].TaskDesc);
      expect(result[0].StartDate).toEqual(obj[0].StartDate);
      expect(result[0].EndDate).toEqual(obj[0].EndDate);
      expect(result[0].Priority).toEqual(obj[0].Priority);
      expect(result[0].Status).toEqual(obj[0].Status);
      expect(result[0].Project_Id).toEqual(obj[0].Project_Id);
      expect(result[0].User_Id).toEqual(obj[0].User_Id);
    });
}));

it('put task test service',  
  inject([TaskService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Task : obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.post(1,Task).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);    
      expect(result[0].Task_Id).toEqual(obj[0].Task_Id);
      expect(result[0].Parent_Id).toEqual(obj[0].Parent_Id);
      expect(result[0].TaskDesc).toEqual(obj[0].TaskDesc);
      expect(result[0].StartDate).toEqual(obj[0].StartDate);
      expect(result[0].EndDate).toEqual(obj[0].EndDate);
      expect(result[0].Priority).toEqual(obj[0].Priority);
      expect(result[0].Status).toEqual(obj[0].Status);
      expect(result[0].Project_Id).toEqual(obj[0].Project_Id);
      expect(result[0].User_Id).toEqual(obj[0].User_Id);
    });
}));

it('delete task test service',  
  inject([TaskService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Task : obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.delete(1).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);    
      expect(result[0].Task_Id).toEqual(obj[0].Task_Id);      
    });
}));


});
