import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  RedirectToOtherPage1()
  {
    this.router.navigateByUrl('/dashboard');
  }
  RedirectToOtherPage2()
  {
    this.router.navigateByUrl('/activities');
  }
  RedirectToOtherPage3()
  {
    this.router.navigateByUrl('/service');
  }
  RedirectToOtherPage4()
  {
    this.router.navigateByUrl('/profile');
  }
}
