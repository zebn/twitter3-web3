import { Injectable } from '@angular/core';
import { Tweet } from './share/model/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  public tweets: Tweet[] = [];

  public getTweets(): Tweet[] {

    this.tweets = [];
    let tweet = new Tweet(new Date(), "Hello", "John", 2, undefined, undefined, undefined)
    this.tweets.push(tweet);
    let tweet2 = new Tweet(new Date(), "Bye", "Dave", 2, undefined, undefined, undefined)
    this.tweets.push(tweet2);

    let tweet3 = new Tweet(new Date(), "fgfgfdg", "Karl", 2, undefined, undefined, undefined)
    this.tweets.push(tweet3);
    return this.tweets
  }

  constructor() { }
}
