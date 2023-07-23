import { Component, inject } from '@angular/core';
import { PlannerService } from 'src/app/planner.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
  svc=inject(PlannerService)
  // take city name from the main component and parse into the weather api to display the weather icon

}
