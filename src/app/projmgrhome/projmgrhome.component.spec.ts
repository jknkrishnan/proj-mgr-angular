import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjmgrhomeComponent } from './projmgrhome.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';



describe('ProjmgrhomeComponent', () => {
  let component: ProjmgrhomeComponent;
  let fixture: ComponentFixture<ProjmgrhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjmgrhomeComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule, 
        BrowserModule,
        RouterTestingModule,
        HttpClientModule,
        MatCardModule,   
        MatToolbarModule,
        MatTableModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjmgrhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
