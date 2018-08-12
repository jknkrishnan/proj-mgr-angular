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




describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let userService: UserService;
  let fixture: ComponentFixture<AddUserComponent>;
  let spy: any;
  let usr: [{ First_Name: 'JK', Last_Name: 'J', Employee_Id : 166300, User_Id : 1 }];
  const UserObject : User = new User()



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
        MatTableModule,
      ],
      providers: [
        UserService
      ]
    })
    .compileComponents();
    component = TestBed.createComponent(AddUserComponent).componentInstance;
    userService = TestBed.get(UserService);    
    spyOn(userService, 'get').and.callThrough();
    spyOn(userService, 'post');    
    spyOn(userService, 'put').and.callThrough();
    spyOn(userService, 'delete').and.callThrough();
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
    expect(userService.get).toHaveBeenCalledWith();
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

  it('add user', () => {
    //component.adduser();    
  });  

  it('update user', () => {
    
  });  

  it('delete user', () => {
    
  });  

  it('get user by id', () => {
    
  }); 

  it('submit user', () => {
    
  }); 

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

