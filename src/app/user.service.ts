import { Injectable } from '@angular/core';
import { User } from './share/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected users: User[] = [];

  constructor() {
      let user = new User ("@buba","James","https://pbs.twimg.com/profile_images/1481281375835725825/rZzCEFm3_400x400.jpg")
      this.users.push(user);

   }

   public getUser(id:string){
    let user = this.users.filter(user => user.id === id);
    if (user.length>0)
    {
      return user[0];
    }
    return null
   }
}
