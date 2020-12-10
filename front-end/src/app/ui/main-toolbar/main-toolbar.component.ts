import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})

export class MainToolbarComponent implements OnInit {

  imglogo = "assets/img/Capilhete.png"

  @Input() appName: string

  constructor() { }

  ngOnInit(): void {
  }

}
