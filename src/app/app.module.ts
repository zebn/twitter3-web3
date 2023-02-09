import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './share/tweetcomponent/tweet.component';
import { ProfieComponent } from './profie/profie.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { TweetService } from './tweet.service';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    ProfieComponent,
    MainFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,TweetService]
})
export class AppModule { }
