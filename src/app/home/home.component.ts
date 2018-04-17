import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  iframeUrl: string;

  constructor() {
    this.iframeUrl = environment.iframeConfig.baseUrl;
  }

  ngOnInit() {
    // this.iframeUrl = environment.iframeConfig.baseUrl;
    console.log('home oninit...');
  }

}
