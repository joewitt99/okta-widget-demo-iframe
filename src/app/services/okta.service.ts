import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable()
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn(environment.oktaWidgetConfig);
  }

  /**
   * Checks if there is a current accessToken in the TokenManager.
   */
  isAuthenticated() {
    return !!this.widget.tokenManager.get('accessToken');
  }

  getWidget() {
    return this.widget;
  }
}
