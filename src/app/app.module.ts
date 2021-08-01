import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForcesComponent } from './forces/forces.component';
import { ForcesListComponent } from './forces/forces-list/forces-list.component';
import { ForcesDetailComponent } from './forces/forces-detail/forces-detail.component';
import { ForcesItemComponent } from './forces/forces-list/forces-item/forces-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ForceStartComponent } from './forces/force-start/force-start.component';
import { ForceService } from './forces/force.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForcesComponent,
    ForcesListComponent,
    ForcesDetailComponent,
    ForcesItemComponent,
    DropdownDirective,
    ForceStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ForceService, ForcesDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
