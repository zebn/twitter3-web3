import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tweet } from './share/model/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {


  public tweetSubject$ = new Subject();
  public newTweets$ = new Subject();
  
  private tweets: any[] = [];



  public constructor() {

    let tweet = new Tweet(new Date(), "Hello", "John", 2, undefined, undefined, undefined)
    this.tweets.push(tweet);
    let tweet2 = new Tweet(new Date(), "Bye", "Dave", 2, undefined, undefined, undefined)
    this.tweets.push(tweet2);
    let tweet3 = new Tweet(new Date(), "fgfgfdg", "Karl", 2, undefined, undefined, undefined)
    this.tweets.push(tweet3);


  }


  public publishTweet(tweet: Tweet): void {
    this.tweets.unshift(tweet);
    this.newTweets$.next(true);

  }

  public getTweets(): Tweet[] {

    let returnValue = [];
    this.tweets.forEach(tweet => {
      returnValue.push(tweet);
    });
    return this.tweets
  }

  public getTweetById(id: number): Tweet{

      return this.tweets[id]
  }
}