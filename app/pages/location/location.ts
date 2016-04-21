import {Page, NavController,Alert} from 'ionic-angular';
//import {ItemDetailsPage} from '../item-details/item-details';


@Page({
  templateUrl: 'build/pages/location/location.html'
})
export class Location {
  items: Array<{title: string}>;
  constructor(){
    
    this.items = [
      { title: 'Mogadishu' },
      { title: 'Darusalam City' },
      { title: 'Cadado' },
      { title: 'Gaalkacyo' },
      { title: 'Dhuusamareeb' },
      { title: 'Hobyo' },
      { title: 'Ceelbuur' },
      { title: 'Ceeldhere' },
      { title: 'Caabudwaq' },
      { title: 'Guriceel' },
      { title: 'Puntland' },
      { title: 'Gaalkacyo' },
      { title: 'Garowe' },
      { title: 'Bosaso' },
      { title: 'Qardho' },
      { title: 'Ayl' },
      { title: 'Qandala' },
      { title: 'Badhan' },    
      { title: 'Somaliland' },
      { title: 'Borame' },
      { title: 'Hargeisa' },
      { title: 'Berbera' },
      { title: 'Burco' },
      { title: 'Shiikh' },
      { title: 'Bohotle' },
      { title: 'Laas Canood' },
      { title: 'Ceerigaabo' },
      { title: 'Oodwayne' },
      { title: 'Daarbuduq' },
      { title: 'Kismayo' },
      { title: 'Afmadow' },
      { title: 'Bardhere' },
      { title: 'Jamaame' },
      { title: 'Luuq' },
      { title: 'Garbahaarey' },
      { title: 'Dhobleey' },
      { title: 'Baidoa' },
      { title: 'Buur Hakaba' },
      { title: 'Xuddur' },
      { title: 'Merca' },
      { title: 'Baraawe' },
      { title: 'Qoryoley' },
      { title: 'Dinsoor' },
      { title: 'Afgoye' },
      { title: 'Wanlawayn' },
      { title: 'Jowhaar' },
      { title: 'Balcad' },
      { title: 'Adale' },
      { title: 'Balcad' },
      { title: 'Mahaday' },
      { title: 'Bulobarde' },
      { title: 'Baladweyne' },
      { title: 'Mataban' }



        
        
        
      
    ];
    
  }
  // constructor(public nav: NavController) {
  //   this.doPrompt();
  // }
  
  // doPrompt() {
  //   let prompt = Alert.create({
  //     title: 'Login',
  //     message: "Please use from below to login ",
  //     inputs: [
  //       {
  //         name: 'Email',
  //         placeholder: 'email@email.com'
  //       },
  //       {
  //         name: 'Password',
  //         placeholder: '***********'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Sign in',
  //         handler: data => {
  //           console.log('Saved clicked');
  //         }
  //       }
  //     ]
  
  
  
  
  //   });
  //   this.nav.present(prompt);
  // }

}
