import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Tweet } from '../model/tweet';
import { TweetService } from '../../tweet.service';
import { UserService } from 'src/app/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-newtweet',
  templateUrl: './newtweet.component.html',
  styleUrls: ['./newtweet.component.scss']
})
export class NewtweetComponent {
  form: FormGroup<any>;
  public constructor(public formBuilder: FormBuilder, public tweetserice: TweetService, public userservice: UserService) {

    

    
    this.form = this.formBuilder.group({
      tweetcontent: [null, [
        Validators.max(140)]]
    });
  }

  public submit() {
    let author: User | null = this.userservice.getUser("@buba")
    if (author != null) {

    if (this.form.valid) {
      let tweetcontent = this.form.get('tweetcontent')?.value;
      let tweet = new Tweet(new Date(), tweetcontent, author);
      //let console.log(this.form.get('tweetcontent')?.value);
      this.tweetserice.publishTweet(tweet);
    }
  }

  }




}
