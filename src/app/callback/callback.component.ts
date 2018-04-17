import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Okta } from '../services/okta.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private okta: Okta, private route: Router) {
    // Handles the response from Okta and parses tokens
    // okta.handleAuthentication().then(() => this.route.navigate(['']));
    // If required this component would handle storing the tokens or failure cases
    // resulting from the authorize call.  Not required since using okta-post-message for
    // our scenario.
    console.log('need to do something');
  }

  ngOnInit() {
  }

}
