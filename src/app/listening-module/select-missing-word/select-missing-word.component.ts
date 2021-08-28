import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-missing-word',
  templateUrl: './select-missing-word.component.html',
  styleUrls: ['./select-missing-word.component.css']
})
export class SelectMissingWordComponent implements OnInit {
   public showAnswers1: any;
   public showAnswers2: any;

   constructor() {
     this.showAnswers1 = false;
     this.showAnswers2 = false;
   }

   ngOnInit() {
   }
}
