import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SubteamInfoComponent } from './subteam-info/subteam-info.component';
import { UnderwaterComponent } from './underwater/underwater.component';
import { RoverComponent } from './rover/rover.component';
import { DroneRacingComponent } from './drone-racing/drone-racing.component';
import { VexuComponent } from './vexu/vexu.component';
import { AboutComponent } from './about/about.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { JoinComponent } from './join/join.component';
import { ResourcesComponent } from './resources/resources.component';
import { BoardOfBusinessComponent } from './board-of-business/board-of-business.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: SubteamInfoComponent},
      {path: 'underwater', component: UnderwaterComponent},
      {path: 'rover', component: RoverComponent},
      {path: 'drone_racing', component: DroneRacingComponent},
      {path: 'vexu', component: VexuComponent},
      {path: 'about', component: AboutComponent},
      {path: 'leadership', component: LeadershipComponent},
      {path: 'join', component: JoinComponent},
      {path: 'resources', component: ResourcesComponent},
      {path: 'board-of-business', component: BoardOfBusinessComponent}
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
