
export class Tweet {

    public date: Date;
    public message: string;
    public author: string;
    public likes: number;
    public retweets?: Tweet[];
    public replies?: Tweet[];
    public images?: string[];

    constructor(date: Date, message: string, author: string, likes: number = 0, retweets?: Tweet[] , replies?: Tweet[], images?: string[]) {

        this.date = date;
        this.message = message;
        this.author = author;
        this.likes = likes;
        this.retweets = retweets;
        this.replies = replies;
        this.images = images;
    }

}

