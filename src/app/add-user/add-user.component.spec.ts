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

const USER_OBJECT: User = new User();

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let userService: UserService;
  let fixture: ComponentFixture<AddUserComponent>;
  let spy: any;

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
    spyOn(userService, 'post').and.callThrough();
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
});
