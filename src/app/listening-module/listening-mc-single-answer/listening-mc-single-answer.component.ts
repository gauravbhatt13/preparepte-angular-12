import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening-mc-single-answer',
  templateUrl: './listening-mc-single-answer.component.html',
  styleUrls: ['./listening-mc-single-answer.component.css']
})
export class ListeningMcSingleAnswerComponent implements OnInit {
  public showAnswers1: any;
  public showAnswers2: any;

  constructor() {
    this.showAnswers1 = false;
    this.showAnswers2 = false;
  }

  ngOnInit() {
  }

}
