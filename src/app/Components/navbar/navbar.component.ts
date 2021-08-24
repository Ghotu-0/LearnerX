import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
})
export class NavbarComponent implements OnInit {


  toogleSearchbarClass="dNone";
  toogleMenubarClass="dNone";
  toogleMenubarTitle="Open";


  
  constructor() {

    let screenLess = window.getComputedStyle(document.body).getPropertyValue("--x-350pxDrop");

    window.onresize=()=>{
      screenLess = window.getComputedStyle(document.body).getPropertyValue("--x-350pxDrop");
      ch(this);
    }
  
    ch(this);

    function ch(cls : any){
      if(screenLess=="true"){
        cls.toogleMenubarClass="dNone";
       }else{
        cls.toogleMenubarClass="dFlex";
       }
    }
   
  
  }

  toogleSearchbar(display : string){
    if(this.toogleSearchbarClass=="dNone"){
      this.toogleSearchbarClass=display;
      document.getElementsByClassName("x-SidebarSecondaryMenu")[0].classList.add("dNone");
    }else{
      this.toogleSearchbarClass="dNone";
      document.getElementsByClassName("x-SidebarSecondaryMenu")[0].classList.remove("dNone");
    }
   
    
  }

  toogleMenubar(display : string){
    if(this.toogleMenubarClass=="dNone"){
      this.toogleMenubarClass=display;
      this.toogleMenubarTitle="Close";
    }else{
      this.toogleMenubarClass="dNone";
      this.toogleMenubarTitle="Open";
    }
   
    
  }

  ngOnInit(): void {

    setLayout();

    function setLayout() {

      for (let o = 0; o < document.getElementsByClassName("x-MenuButton").length; o++) {

        let menuBut = document.getElementsByClassName("x-MenuButton")[o];

        if (menuBut) {
          menuBut.addEventListener("click", updateMenu);

          function updateMenu() {

            let menuSt = parseInt(window.getComputedStyle(document.body).getPropertyValue("--x-SidebarLeft"));

            if (menuSt == 0) {
              document.body.style.setProperty("--x-SidebarLeft", "-240px");
              document.body.style.setProperty("--x-MainOpacity", "1");
              document.body.style.setProperty("--x-SidebarBorder", "0px");
            } else {
              document.body.style.setProperty("--x-SidebarLeft", "0px");
              document.body.style.setProperty("--x-MainOpacity", "0.5");
              document.body.style.setProperty("--x-SidebarBorder", "1px");
            }

          }
        }
      }
    }

  }

}
