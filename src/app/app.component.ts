import { Component, OnInit } from '@angular/core';
import { CommonUtilityService } from './services/common-utility-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'ng-Freelance';

  constructor(private utilityService: CommonUtilityService) { }

  ngOnInit() {

  }
}
