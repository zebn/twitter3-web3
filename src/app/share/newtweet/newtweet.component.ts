import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Tweet } from '../model/tweet';
import { TweetService } from '../../tweet.service';

@Component({
  selector: 'app-newtweet',
  templateUrl: './newtweet.component.html',
  styleUrls: ['./newtweet.component.scss']
})
export class NewtweetComponent {
  form: FormGroup<any>;
  public constructor(public formBuilder: FormBuilder, public tweetserice: TweetService) {


    this.form = this.formBuilder.group({
      tweetcontent: [null, [
        Validators.max(140)]]
    });
  }

  public submit() {
    if (this.form.valid) {
      let tweetcontent = this.form.get('tweetcontent')?.value;
      let tweet = new Tweet(new Date(), tweetcontent, "Johnnnn");
      //let console.log(this.form.get('tweetcontent')?.value);
      this.tweetserice.publishTweet(tweet);
    }


  }




}
