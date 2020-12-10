import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-main-toolbar appName={{title}}></app-main-toolbar>
    <div id="content">
      <router-outlet></router-outlet>
    </div>
    <app-main-footer></app-main-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Capilhete';
  imgLogo = 'assets/img/Capilhete'
}
