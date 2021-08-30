import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModuleRoutingModule } from './routing-module-routing.module';
import { Routes,RouterModule } from '@angular/router';
import { ProfilesComponent } from 'src/app/profiles/profiles.component';

const routes: Routes = [
  {path:'profileSearch',component:ProfilesComponent}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingModuleRoutingModule
  ],
  exports: [RouterModule]
})
export class RoutingModuleModule { }
