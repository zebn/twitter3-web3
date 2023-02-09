import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfieComponent } from './profie/profie.component';

const routes: Routes = [
  { path: 'main-feed', component: MainFeedComponent },
  { path: 'profile', component: ProfieComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
