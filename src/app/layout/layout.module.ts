import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import {LayoutComponent} from "./layout.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {DataService} from "../service/data.service";
import {AuthService} from "../service/auth.service";
import {AuthRouteGuard} from "../auth/auth-route-guard";

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ],
  providers: [DataService, AuthService, AuthRouteGuard]
})
export class LayoutModule { }
