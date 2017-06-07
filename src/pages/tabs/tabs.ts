import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {WorkoutPage} from '../workout/workout';
import { AddWorkoutPage } from '../add-workout/add-workout';

@Component({
  selector : 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  //tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  //tab3Root: any = ContactPage;
  tab4Root: any = WorkoutPage;
  tab5Root: any = AddWorkoutPage;

  constructor() {

  }
}