import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tweet } from '../share/model/tweet';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnDestroy {

  title = 'twitter3-web3';

  public tweets: Tweet[] = [];
  public subscriptions: Subscription[] = new Array<Subscription>();
  public subscription: Subscription = new Subscription();

  public constructor(public tweetService: TweetService) {
    this.tweets = this.tweetService.getTweets();
    this.subscription = this.tweetService.newTweets$.subscribe(() => {
      this.tweets = this.tweetService.getTweets();
    })

  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
