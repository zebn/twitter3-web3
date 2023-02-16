import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './share/tweetcomponent/tweet.component';
import { ProfieComponent } from './profie/profie.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { TweetService } from './tweet.service';
import { NewtweetComponent } from './share/newtweet/newtweet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    ProfieComponent,
    MainFeedComponent,
    NewtweetComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,TweetService]
})
export class AppModule { }
