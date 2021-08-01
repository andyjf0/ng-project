import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForcesComponent } from './forces/forces.component';
import { ForcesListComponent } from './forces/forces-list/forces-list.component';
import { ForcesDetailComponent } from './forces/forces-detail/forces-detail.component';
import { ForcesItemComponent } from './forces/forces-list/forces-item/forces-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ForceStartComponent } from './forces/force-start/force-start.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/forces', pathMatch: 'full' },
  { path: 'forces', component: ForcesComponent, children: [
    { path: '', component: ForceStartComponent },
    { path: ':id', component: ForcesDetailComponent },
  ] },
  { path: 'list', component: ForcesListComponent },
  { path: 'detail', component: ForcesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
