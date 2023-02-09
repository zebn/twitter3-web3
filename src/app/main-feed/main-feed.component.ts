import { Component } from '@angular/core';
import { Tweet } from '../share/model/tweet';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent {

  title = 'twitter3-web3';

  public tweets: Tweet[] = [];

  public constructor(public tweetService: TweetService) {
    this.tweets = this.tweetService.getTweets();


  }

}
