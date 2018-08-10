import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from '../User';
import { environment } from 'src/environments/environment';

import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

describe('UserService', () => {
  
  let usr: [{ First_Name: 'JK', Last_Name: 'J', Employee_Id : 166300, User_Id : 1 }]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [        
        UserService,
        { provide: XHRBackend, useClass: MockBackend }
      ],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
  
  it('get should return an user',  
    inject([UserService,XHRBackend], (service,mockBackend) => {
      const mockResponse = {
        User: usr
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      
      service.get().subscribe((users) => {
        expect(users.length).toBeGreaterThan(0);    
        expect(users[0].First_Name).toEqual(usr[0].First_Name);
        expect(users[0].Last_Name).toEqual(usr[0].Last_Name);
        expect(users[0].Employee_Id).toEqual(usr[0].Employee_Id);
      });
  }));

  it('get by id should return an user id',  
    inject([UserService,XHRBackend], (service,mockBackend) => {
      const mockResponse = {
        User: usr
      };
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });      
      service.getById(1).subscribe((users) => {
        expect(users.length).toBeGreaterThan(0);    
        expect(users[0].First_Name).toEqual(usr[0].First_Name);
        expect(users[0].Last_Name).toEqual(usr[0].Last_Name);
        expect(users[0].Employee_Id).toEqual(usr[0].Employee_Id);
        expect(users[0].User_Id).toEqual(usr[0].User_Id);
      });
  }));

  it('post user service',  
    inject([UserService,XHRBackend], (service,mockBackend) => {
      const mockResponse = {
        User: usr
      };
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });      
      service.post(User).   
      subscribe((users) => {
        expect(users.length).toBeGreaterThan(0);    
        expect(users[0].First_Name).toEqual(usr[0].First_Name);
        expect(users[0].Last_Name).toEqual(usr[0].Last_Name);
        expect(users[0].Employee_Id).toEqual(usr[0].Employee_Id);
        expect(users[0].User_Id).toEqual(usr[0].User_Id);
      });
  }));

  it('update user service',  
  inject([UserService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      User: usr
    };
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });      
    service.put(1,User).   
    subscribe((users) => {
      expect(users.length).toBeGreaterThan(0);    
      expect(users[0].First_Name).toEqual(usr[0].First_Name);
      expect(users[0].Last_Name).toEqual(usr[0].Last_Name);
      expect(users[0].Employee_Id).toEqual(usr[0].Employee_Id);
      expect(users[0].User_Id).toEqual(usr[0].User_Id);
      });
  }));

  it('delete user service',  
  inject([UserService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      User: usr
    };
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });      
    service.delete(1).   
    subscribe((users) => {   
     expect(users[0].User_Id).toEqual(usr[0].User_Id);
      });
  }));

});
