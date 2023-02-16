import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tweet } from './share/model/tweet';
import { User } from './share/model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {


  public tweetSubject$ = new Subject();
  public newTweets$ = new Subject();

  private tweets: any[] = [];



  public constructor(protected userService: UserService) {

    let author: User | null = this.userService.getUser("@buba")

    if (author != null) {

      let tweet = new Tweet(new Date(), "Hello", author, 2, undefined, undefined, undefined)
      this.tweets.push(tweet);
      let tweet2 = new Tweet(new Date(), "Bye", author, 2, undefined, undefined, undefined)
      this.tweets.push(tweet2);
      let tweet3 = new Tweet(new Date(), "fgfgfdg", author, 2, undefined, undefined, undefined)
      this.tweets.push(tweet3);
    }

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

  public getTweetById(id: number): Tweet {

    return this.tweets[id]
  }
}