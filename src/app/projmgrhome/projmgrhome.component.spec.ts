import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjmgrhomeComponent } from './projmgrhome.component';

describe('ProjmgrhomeComponent', () => {
  let component: ProjmgrhomeComponent;
  let fixture: ComponentFixture<ProjmgrhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjmgrhomeComponent ]
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
