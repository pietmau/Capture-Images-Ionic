import { Component } from '@angular/core';

import { AboutPage } from '../saved/about';
import { HomePage } from '../capture/capture';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  capture = HomePage;
  saved = AboutPage;ß

  constructor() {

  }
}
