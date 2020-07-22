import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {
      stringsElement: '#typed-strings',

      strings: ['Internet Nimo banking', 'Peça a portabilidade hoje e venha ser #Nimo Banking', 'Inovador, Seguro e Digital'],

      typeSpeed: 100,

      backSpeed: 100,

      backDelay: 200, //

      smartBackspace: true,

      fadeOut: true,

      showCursor: false,

      startDelay: 1000,

      loop: true,
      
    };

    const typed = new Typed('.typing-element', options);
  }

}
