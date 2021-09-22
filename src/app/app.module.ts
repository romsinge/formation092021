import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { UnitPipe } from './pipes/unit.pipe';
import { RaceComponent } from './components/race/race.component';
import { RacingPipe } from './pipes/racing.pipe';
import { RaceListComponent } from './components/race-list/race-list.component';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    UnitPipe,
    RaceComponent,
    RacingPipe,
    RaceListComponent,
    PoneyCreateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
