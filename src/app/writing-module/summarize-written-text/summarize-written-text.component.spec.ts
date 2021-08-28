import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeWrittenTextComponent } from './summarize-written-text.component';

describe('SummarizeWrittenTextComponent', () => {
  let component: SummarizeWrittenTextComponent;
  let fixture: ComponentFixture<SummarizeWrittenTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeWrittenTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeWrittenTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
