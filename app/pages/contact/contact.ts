import {Page,NavController} from 'ionic-angular';
// import {ItemDetailsPage} from '../item-details/item-details';

import {Login} from '../login/login';
import {TremClass} from '../trems/trems';

@Page({
  templateUrl: 'build/pages/contact/contact.html'
})
export class Contact {
  
  constructor(public nav: NavController){}
goTerms()
{
  this.nav.push(TremClass)
} 
}
