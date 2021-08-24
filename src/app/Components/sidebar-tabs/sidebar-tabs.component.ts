import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-tabs',
  templateUrl: './sidebar-tabs.component.html',
  styleUrls: ['./sidebar-tabs.component.css']
})
export class SidebarTabsComponent implements OnInit {
 

  constructor() { 


  }

 

  ngOnInit(): void {
    let tabTriggers=document.getElementsByClassName("x-tabsButtons");
    let tabContainer=document.getElementsByClassName("x-tabsContent");
    let activeSlector=window.getComputedStyle(document.body).getPropertyValue("--x-SidebarStickLeft");

    let acE=document.getElementsByClassName("x-SidebarTabActive")[0];
    acE.children[0].classList.add("x-SideIconActive");

    if(acE){
      let nu= Array.prototype.indexOf.call(acE.parentElement?.children,acE);
      
      document.body.style.setProperty("--x-SidebarStickLeft",nu+"");
      document.body.style.setProperty("--x-SidebarContentPos",(nu*-1)+"");

    }

    for (let i = 0; i < tabTriggers.length; i++) {
      
      let tr =  tabTriggers[i];
      
      tr.addEventListener("click",trClick);

      function trClick(){

        if(!tr.classList.contains("x-SidebarTabActive")){

          for (let l = 0; l < document.getElementsByClassName("x-SideIconActive").length; l++) {
            
            document.getElementsByClassName("x-SideIconActive")[l].classList.remove("x-SideIconActive");
            
          }

         for (let l = 0; l < tabTriggers.length; l++) {
            if(tabTriggers[l].classList.contains("x-SidebarTabActive")){
              tabTriggers[l].classList.remove("x-SidebarTabActive");
            }
          }

          tr.classList.add("x-SidebarTabActive");
          document.body.style.setProperty("--x-SidebarStickLeft",i+"");
          document.body.style.setProperty("--x-SidebarContentPos",(i*-1)+"");

          tr.children[0].classList.add("x-SideIconActive");
           
         }

      }
      
    }

  }

}
