import {Page, NavController,Alert} from 'ionic-angular';
//import {ItemDetailsPage} from '../item-details/item-details';



@Page({
  templateUrl: 'build/pages/browse/browse.html'
})
export class Browse {

   tasks : any[];

  constructor() {
      this.tasks = [ 
          {title : "KIA CERATOR", rs : "80.000 AED", dec: "2 Weeks ago PAksitan",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_869781494.jpeg&w=400&h=226"},
          { title : "TOYOTA COROLLA",rs : " 5,000 USD", dec: "3 weeks ago Pakistan",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/03/31/500_627945567.jpg&w=400&h=226"},
          { title : "2000 HATTERAS 82 CUSTOM", rs : "4,959,000 USD", dec: "2 months ago PAksitan",img: "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_563323974.jpeg&w=400&h=226"},
          { title : "FOTON BJ6129 49+1+1 LUXURY", rs : "435,000 SOS", dec: "2 Weeks ago India",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_884735107.jpeg&w=400&h=226"},
          { title : "MOBILE", rs : " 260 USD", dec: "3 months ago UK",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/03/31/500_63434827.jpeg&w=400&h=226" },
          { title : "REDUCED - 2009 MAJESTY 77", rs : "5,900,000 USD", dec: "2 Weeks ago Karachi",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_232177734.jpeg&w=400&h=226"},
 ]

  
  }
}
