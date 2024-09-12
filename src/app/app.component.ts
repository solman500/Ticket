import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { ChartComponent } from "./Component/chart/chart.component";
import { CardComponent } from "./Component/card/card.component";
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { TableComponent } from './Component/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxEchartsDirective, ChartComponent, CardComponent,MatIconModule,TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideEcharts()],
})
export class AppComponent {
  title = 'Ticket';
  
}
