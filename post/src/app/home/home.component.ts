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
  logo =[
    // { logo:"https://portal.thecourierguy.co.za/sites/tcg/logo.png?v=1" },
    { logo:"https://prd-static-default-2.sf-cdn.com/resources/images/store/2015/global/640x400/Canvas/x1-640x350-20221213.jpg.pagespeed.ic.wJnVXu_sgj.jpg" },
    
  ]

  
}
