import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceComponent } from './components/race/race.component';

const routes: Routes = [
  {
    path: '',
    component: RaceListComponent,
  },
  {
    path: 'race',
    component: RaceComponent,
  },
  {
    path: 'poney-create',
    component: PoneyCreateComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
