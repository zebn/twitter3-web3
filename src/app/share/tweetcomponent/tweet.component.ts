import { Component, Input } from "@angular/core";

@Component({

    selector: 'tweet',
    templateUrl: './tweet.component.html',

})

export class TweetComponent {
@Input()
public content: any = null;


constructor() {}

}