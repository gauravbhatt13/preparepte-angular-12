import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAssayComponent } from './write-assay.component';

describe('WriteAssayComponent', () => {
  let component: WriteAssayComponent;
  let fixture: ComponentFixture<WriteAssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteAssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteAssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
