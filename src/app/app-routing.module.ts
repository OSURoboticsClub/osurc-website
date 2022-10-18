import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SubteamInfoComponent } from './subteam-info/subteam-info.component';
import { UnderwaterComponent } from './underwater/underwater.component';
import { RoverComponent } from './rover/rover.component';
import { DroneRacingComponent } from './drone-racing/drone-racing.component';
import { VexuComponent } from './vexu/vexu.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: SubteamInfoComponent},
      {path: 'underwater', component: UnderwaterComponent},
      {path: 'rover', component: RoverComponent},
      {path: 'drone_racing', component: DroneRacingComponent},
      {path: 'vexu', component: VexuComponent}
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
