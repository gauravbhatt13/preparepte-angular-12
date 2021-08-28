import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mc-multiple-answer',
  templateUrl: './mc-multiple-answer.component.html',
  styleUrls: ['./mc-multiple-answer.component.css']
})
export class McMultipleAnswerComponent implements OnInit {
  public showAnswers: any;
  public showAnswers2: any;

  constructor() {
    this.showAnswers = false;
    this.showAnswers2 = false;
   }

  ngOnInit() {
  }

}
