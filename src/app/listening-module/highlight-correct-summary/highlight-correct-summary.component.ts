import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-correct-summary',
  templateUrl: './highlight-correct-summary.component.html',
  styleUrls: ['./highlight-correct-summary.component.css']
})
export class HighlightCorrectSummaryComponent implements OnInit {
  public showAnswers1: any;
  public showAnswers2: any;

  constructor() {
    this.showAnswers1 = false;
    this.showAnswers2 = false;
  }

  ngOnInit() {
  }

}
