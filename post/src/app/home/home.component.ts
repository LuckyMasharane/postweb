import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  

  constructor() { }

  ngOnInit(): void {
  }

  service =[
    { serv:"https://portal.thecourierguy.co.za/sites/tcg/logo.png?v=1" },
    { serv: "https://cdn.24.co.za/files/Cms/General/d/10808/68d1daa5d4e6478eb57a235711226395.jpg"},
    { serv: "https://www.teamworkphoto.com/wp-content/uploads/2019/01/kodak-logo.png"}
  ]
  stationery =[
    {stat: "https://cdn.24.co.za/files/Cms/General/d/10808/68d1daa5d4e6478eb57a235711226395.jpg"}
  ]
  logo =[
    // { logo:"https://portal.thecourierguy.co.za/sites/tcg/logo.png?v=1" },
    { logo:"https://prd-static-default-2.sf-cdn.com/resources/images/store/2015/global/640x400/Canvas/x1-640x350-20221213.jpg.pagespeed.ic.wJnVXu_sgj.jpg" },
    
  ]

  
}
