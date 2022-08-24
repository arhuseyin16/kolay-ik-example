import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";
import {DataService} from "../../service/data.service";
import {ChartModule} from "primeng/chart";
import { ChartComponent } from './chart/chart.component';
import { SpecialDayComponent } from './special-day/special-day.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Home'
    }
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule,
    DragDropModule,
  ],
  exports: [],
  declarations: [DashboardComponent, ChartComponent, SpecialDayComponent],
  providers: [DataService]
})

export class DashboardModule {}
