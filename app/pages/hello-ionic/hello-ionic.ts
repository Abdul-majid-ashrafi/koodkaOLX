import {Page,NavController} from 'ionic-angular';
import {CarPage} from '../car/car.ts';
import {Location} from '../location/location.ts';
import {Post} from '../postAdd/postAdd.ts'




@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
})
export class HelloIonicPage {
    options: any = {slidesPerView: 3,spaceBetween: 40}
  show: boolean = false;
  tasks : any[];

  constructor(public nav : NavController) {
      this.tasks = [ 
          {title : "KIA CERATOR", rs : "80.000 AED",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_869781494.jpeg&w=400&h=226"},
          { title : "TOYOTA COROLLA",rs : " 5,000 USD",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/03/31/500_627945567.jpg&w=400&h=226"},
          { title : "2000 HATTERAS 82 CUSTOM", rs : "4,959,000 USD",img: "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_563323974.jpeg&w=400&h=226"},
          { title : "FOTON BJ6129 49+1+1 LUXURY", rs : "435,000 SOS",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_884735107.jpeg&w=400&h=226"},
          { title : "MOBILE", rs : " 260 USD",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/03/31/500_63434827.jpeg&w=400&h=226" },
          { title : "REDUCED - 2009 MAJESTY 77", rs : "5,900,000 USD",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_232177734.jpeg&w=400&h=226"},
 ]

  
  }
    nextPage(){
        this.nav.push(Location)
    }
    PostPage(){
        this.nav.push(Post)
    }
    
     carPage(){this.nav.push(CarPage)}
    
   
   clicked() {
    this.show = !this.show;
  }
}
