import { ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeAnnouncementComponent } from './home-announcement/home-announcement.component';
import { HomeTopicComponent } from './home-topic/home-topic.component'

@Component({
  selector: 'app-core-home',
  templateUrl: './core-home.component.html',
  styleUrls: ['./core-home.component.css']
})
export class CoreHomeComponent implements OnInit {

  @ViewChild('coreHomeInsert' , { read: ViewContainerRef, static:true}) 
  public homeInsertLocation!:ViewContainerRef;

  constructor(private resolver : ComponentFactoryResolver , private injector : Injector) {  }

  ngOnInit(): void {

    this.homeInsertLocation.detach();
    this.addComponent(HomeTopicComponent,{hello:"hi"});
    this.addComponent(HomeTopicComponent,{hello:"go"});
    this.addComponent(HomeTopicComponent,{hello:"go"});
    this.addComponent(HomeTopicComponent,{hello:"go"});
    this.addComponent(HomeTopicComponent,{hello:"go"});

    this.addComponent(HomeAnnouncementComponent,{hello:"Home Announcement"});

  }

  addComponent(toAdd:any, param:Object){

    const componenyFactory = this.resolver.resolveComponentFactory(toAdd);
    const component = componenyFactory.create(this.injector);
    const ins : any = component.instance 
    this.homeInsertLocation.insert(component.hostView);

    for (let i = 0; i < Object.keys(param).length; i++) {
      let key =   Object.keys(param)[i];
      let value =  Object.values(param)[i];
      ins[key]=value;
    }

  }

}
