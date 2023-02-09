import { Component } from '@angular/core';
import { Tweet } from '../share/model/tweet';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent {

  title = 'twitter3-web3';

  public tweets: Tweet[] = [];
 // public tweet1 Tweet = null; 

  public constructor() {


  let tweet = new Tweet ( new Date (), "Hello", "John", 2, undefined, undefined, undefined)
  this.tweets.push(tweet);
  let tweet2 = new Tweet ( new Date (), "Bye", "Dave", 2, undefined, undefined, undefined)
  this.tweets.push(tweet2);

  let tweet3 = new Tweet ( new Date (), "fgfgfdg", "Karl", 2, undefined, undefined, undefined)
  this.tweets.push(tweet3);

  }

}
