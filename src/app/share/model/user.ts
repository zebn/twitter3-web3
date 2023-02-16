import { Tweet } from "./tweet";

export class User {
    protected _id: string;

    set id(value:any){
        this._id=value;
    }

    get id(): any{
        return this._id;
    }
    protected _name: string;

    set name(value:any){
        this._id=value;
    }

    get name(): any{
        return this._id;
    }

    protected _picture: string;

    set picture(value:any){
        this._id=value;
    }

    get picture(): any{
        return this._id;
    }
    protected tweets?: Tweet[];
    protected followers?: User[];
    protected following?: User[];

    constructor(id:string, name: string, picture: string, tweets?:Tweet[],followers?:User[],following?:User[], ) {

        this._id = id;
        this._name = name;
        this._picture = picture;
        this.tweets = tweets;
        this.followers = followers;
        this.following = following;
    }
    
}
