import { User } from "./user";

export class Tweet {

    public date: Date;
    public message: string;
    public author: User;
    public likes: number;
    public retweets?: Tweet[];
    public replies?: Tweet[];
    public images?: string[];

    constructor(date: Date, message: string, author: User, likes: number = 0, retweets?: Tweet[] , replies?: Tweet[], images?: string[]) {

        this.date = date;
        this.message = message;
        this.author = author;
        this.likes = likes;
        this.retweets = retweets;
        this.replies = replies;
        this.images = images;
    }

}

