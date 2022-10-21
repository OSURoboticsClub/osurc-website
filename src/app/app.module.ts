import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SubteamInfoComponent } from './subteam-info/subteam-info.component';
import { HeaderComponent } from './header/header.component';
import { UnderwaterComponent } from './underwater/underwater.component';
import { RoverComponent } from './rover/rover.component';
import { DroneRacingComponent } from './drone-racing/drone-racing.component';
import { VexuComponent } from './vexu/vexu.component';
import { AboutComponent } from './about/about.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { JoinComponent } from './join/join.component';
import { BoardOfBusinessComponent } from './board-of-business/board-of-business.component';
import { ResourcesComponent } from './resources/resources.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    SubteamInfoComponent,
    HeaderComponent,
    UnderwaterComponent,
    RoverComponent,
    DroneRacingComponent,
    VexuComponent,
    AboutComponent,
    LeadershipComponent,
    JoinComponent,
    BoardOfBusinessComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
