import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {EmployeesComponent} from "./employees.component";
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import {DataService} from "../../service/data.service";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipeModule} from "../../pipes/pipe.module";
import {NzAvatarModule} from "ng-zorro-antd/avatar";

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    data: {
      title: 'Employees'
    }
  },
  {
    path: 'detail',
    component: EmployeesDetailComponent,
    data: {
      icon: '',
      title: 'Employees'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PipeModule,
    NzAvatarModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [EmployeesComponent, EmployeesDetailComponent],
  providers: [DataService, FormBuilder]
})

export class EmployeesModule {}
