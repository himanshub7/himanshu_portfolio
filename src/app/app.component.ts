import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  yesOrNo=1;
  home:boolean=true;
  about:boolean=true;
  services:boolean=true;
  contact:boolean=true;
  

  obj1= {
    firstName: "Himanshu",
    firstFun: function(){
      console.log("Himanshu inside function");
    }
  }
  

  constructor(private router:Router){

  }
  
  ngOnInit() {
    console.log(this.obj1.firstName);
    this.obj1.firstFun();
  }

  

  homes(){
    this.home=true;
    this.about=false;
    this.services=false;
    this.contact=false;
    window.scroll({ 
      top: 0,
      behavior: 'smooth' 
    });
  }

  abouts(){
    this.home=false;
    this.about=true;
    this.services=false;
    this.contact=false;
    window.scroll({ 
      top: 0,
      behavior: 'smooth' 
    });
  }

  servicess(){
    this.home=false;
    this.about=false;
    this.services=true;
    this.contact=false;
    window.scroll({ 
      top: 0,
      behavior: 'smooth' 
    });
  }

  contacts(){
    this.home=false;
    this.about=false;
    this.services=false;
    this.contact=true;
    window.scroll({ 
      top: 0,
      behavior: 'smooth' 
    });
  }

  showAll(){
    this.home=true;
    this.about=true;
    this.services=true;
    this.contact=true;
    window.scroll({ 
      top: 0,
      behavior: 'smooth' 
    });
  }
  
  // project(){
  //   console.log('project');
  //   this.router.navigate(['/project']);
  // }

  // skill(){
  //   console.log('skill');
  //   this.router.navigate(['/skill']);
  //   console.log('skill');
  // }

  // contacts(){
  //   this.router.navigate(['/contact']);
  // }

}
