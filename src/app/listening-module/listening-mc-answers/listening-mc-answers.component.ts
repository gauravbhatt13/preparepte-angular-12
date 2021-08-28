import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening-mc-answers',
  templateUrl: './listening-mc-answers.component.html',
  styleUrls: ['./listening-mc-answers.component.css']
})
export class ListeningMcAnswersComponent implements OnInit {
  public showAnswers: any;
  public showAnswers2: any;

  constructor() {
    this.showAnswers = false;
    this.showAnswers2 = false;
  }

  ngOnInit() {
  }

}
