import { Component, OnInit } from '@angular/core';

/*
	Dropdown with Multiple checkbox select with jQuery - May 27, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/

@Component({
  selector: 'app-rw-fill-blanks',
  templateUrl: './rw-fill-blanks.component.html',
  styleUrls: ['./rw-fill-blanks.component.css']
})
export class RwFillBlanksComponent implements OnInit {
  public gapArray1: any;
  public gapArray2: any;
  public gapArray3: any;
  public gapArray4: any;
  public gapArray5: any;

  constructor() {
    this.gapArray1 = [
      ['sharp', 'same', 'different', 'blunt', 'young'],
      ['shortage', 'difficulty', 'lack', 'weakness', 'gap'],
      ['miss', 'avoid', 'waste', 'spare', 'pass'],
      ['ease', 'skill', 'comfort', 'utility', 'ability'],
      ['meal', 'lesson', 'way', 'teaching', 'style'],
      ['frequent', 'clear', 'similar', 'shared', 'common']
    ];
    this.gapArray2 = [
      ['parenting', 'environment', 'heredity', 'culture'],
      ['identical', 'related', 'diverse', 'idealized'],
      ['delivered', 'managed', 'directed', 'influenced'],
      ['inferred', 'investigated', 'inspected', 'integrated']
    ];
    this.gapArray3 = [
      ['experiences', 'contests', 'experiments', 'attempts'],
      ['spread', 'exported', 'exclusive', 'popular'],
      ['fingers', 'mouth', 'tongue', 'jaws'],
      ['predominate', 'insignificant', 'important', 'errorneous']
    ];
    this.gapArray4 = [
      ['colossal', 'nominal', 'negligible', 'customary'],
      ['agriculture', 'architecture', 'infrastructure', 'conjecture'],
      ['altering', 'revoking', 'comparing', 'analyzing'],
      ['sustaining', 'curbing', 'dividing', 'increasing']
    ];
    this.gapArray5 = [
      ['circumstances', 'occurence', 'incidence', 'condition'],
      ['assured', 'called', 'constrained', 'bound'],
      ['producers', 'directors', 'programmers', 'harvesters'],
      ['poured', 'emptied', 'streamed', 'spent']
    ];
  }

  ngOnInit() {
  }
}
