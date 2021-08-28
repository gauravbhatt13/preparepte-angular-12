import { Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-disqus',
  template: '<div id="disqus_thread"></div>',
})
export class DisqusComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) {
    document.getElementById('disqus-script').remove();
    const disqusScript = document.createElement('script');
    disqusScript.setAttribute('id', 'disqus-script');
    disqusScript.setAttribute('src', 'assets/js/disqus.js');
    document.body.appendChild(disqusScript);
  }

  ngOnInit() {
  }

}
