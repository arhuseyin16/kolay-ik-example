import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    canActivate: [],
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: 'dashboard' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
 }
