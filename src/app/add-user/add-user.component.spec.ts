import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../services/user.service';
import { AddUserComponent } from './add-user.component';
import { User } from '../User';
import { Observable } from 'rxjs';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserFilterPipe} from './user-filter.pipe';
import { UserSortFilterPipe} from './user-sort.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { fakeService, Interceptor } from '../services-test/interceptor';
import {of} from 'rxjs';
import { userInfo } from 'os';


describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let userService: UserService;
  let fixture: ComponentFixture<AddUserComponent>;
  let spy: any;  
  const UserObject : User = new User()  

  class MockPostService extends UserService {
   
    post(item : User) : Observable<User>
    {    
      return Observable.of(UserObject);
    }    

    put(id : number, item : User) : Observable<User>
    {    
      return Observable.of(UserObject);
    }  

    delete(id : number) : Observable<User>
    {    
      return Observable.of(UserObject);
    }     
  }

  let mockservice : MockPostService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent,
                      UserFilterPipe,
                      UserSortFilterPipe  
                    ],
      imports: [
        FormsModule,
        ReactiveFormsModule, 
        BrowserModule,
        RouterTestingModule,
        HttpClientModule,
        MatCardModule,   
        MatToolbarModule,
        MatTableModule
      ],
      providers: [        
        MockPostService
      ]
    })
    .compileComponents();
    component = TestBed.createComponent(AddUserComponent).componentInstance;
    userService = TestBed.get(MockPostService);    
    mockservice = TestBed.get(MockPostService);              
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('reset user', () => {
    component.resetuser();
    expect(component.user_item.User_Id).toBeNull;
    expect(component.user_item.Last_Name).toBeNull;
    expect(component.user_item.First_Name).toBeNull;
    expect(component.user_item.Employee_Id).toBeNull;
  }); 

  it('get user', () => {       
    component.get();
    expect(component.user_item).toBeDefined;
  });   

  it('test ngonit', () => {    
    component.ngOnInit();
    expect(component.caption).toMatch('Add User');
  });  

  it('test add user button visibility false', () => {    
    component.user_item =  new User();         ;
    component.setVisibility()
    expect(component.setVisibility()).toEqual(false);
  });  

  /* it('add user', () => {    
    component.user_item = new User();       
    component.adduser();  
    expect(component.user_item).toBeDefined;
  }); 
  
  it('submit user', () => {    
    component.user_item = new User();       
    component.submituser();  
    expect(component.user_item).toBeDefined;
  });

  it('update user', () => {        
    component.user_item = new User();       
    component.updateuser();  
    expect(component.user_item).toBeDefined;
  });  

  it('delete user', () => {        
    component.user_item = new User();       
    component.deleteuser(1);  
    expect(component.user_item).toBeDefined;
  });  

  it('get user', () => {        
    component.user_item = new User();       
    component.getuser(1);  
    expect(component.user_item).toBeDefined;
  });  */ 
     

  it('sort user F', () => {
    component.sort('F');
    expect(component.sortCaption).toMatch('First_Name');
  }); 

  it('sort user L', () => {
    component.sort('L');
    expect(component.sortCaption).toMatch('Last_Name');
  });

  it('sort user E', () => {
    component.sort('E');
    expect(component.sortCaption).toMatch('Employee_Id');
  });   
});

