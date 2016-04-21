import {Page, NavController,Alert} from 'ionic-angular';
//import {ItemDetailsPage} from '../item-details/item-details';
import {Register} from '../register/register.ts';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class Login {
  
  constructor(public nav: NavController) {}
  registerPage(){
    this.nav.push(Register) 
   }

}
