import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reorder-paragraphs',
  templateUrl: './reorder-paragraphs.component.html',
  styleUrls: ['./reorder-paragraphs.component.css']
})
export class ReorderParagraphsComponent implements OnInit {

  public sentences1: any = [
    'But in Scotland three banks are still allowed to issue I banknotes.',
    'When this bank was founded in 1695, Scots coinage was in short supply and of uncertain value,' +
    'compared with English, Dutch, Flemish or French coin.',
    'To face growth of trade it was deemed necessary to remedy this lack of an adequate currency.',
    'The first Scottish bank to do this was the Bank of Scotland.',
    'In most countries it is only the government, through their central banks, who are permitted to issue currency.'
  ];

  public sentences2: any = [
    'These markets had become rapidly dominated by powerful enterprises who were able to act in' +
    'their own interests, against the interests of both workers and consumers.',
    'Was able to see an expanded role for the State in such legislation to protect us against powerful interests.',
    'He was able to argue that the State was the only organ that was genuinely capable of responding' +
    'to social needs and social interests, unlike markets.',
    'There had already been some legislation to prevent such abuses - such as various Factory Acts' +
    'to prevent the exploitation of child workers.',
    'Markets may be good at encouraging innovation and following trends, but they were no good at' +
    'ensuring .social equality.'
  ];
  constructor() { }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drag(ev: any) {
    console.log('id set to: ' + ev.target.id);
    ev.dataTransfer.setData('text', ev.target.id);
  }

  drop(ev: any) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    console.log('id in drop: ' + data);
    ev.target.appendChild(document.getElementById(data));
  }
  ngOnInit() {
  }

}
