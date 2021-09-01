import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarTabsComponent } from './Components/sidebar-tabs/sidebar-tabs.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MenuSettingsComponent } from './Components/menu-settings/menu-settings.component';
import { MenuNotificationComponent } from './Components/menu-notification/menu-notification.component';
import {SidebarLinksComponent} from './Components/sidebar-links/sidebar-links.component';
import {SidebarNavigationComponent} from './Components/sidebar-navigation/sidebar-navigation.component';
import {SidebarExtrasComponent} from './Components/sidebar-extras/sidebar-extras.component';
import {CoreHomeComponent} from './Components/core-home/core-home.component';
import {CoreDashboardComponent} from './Components/core-dashboard/core-dashboard.component';
import {CoreLecternsComponent} from './Components/core-lecterns/core-lecterns.component';
import {CoreToolsComponent} from './Components/core-tools/core-tools.component';
import {HomeTopicComponent} from './Components/core-home/home-topic/home-topic.component';
import { HomeAnnouncementComponent } from './Components/core-home/home-announcement/home-announcement.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarTabsComponent,
    NavbarComponent,
    MenuSettingsComponent,
    MenuNotificationComponent,
    SidebarLinksComponent,
    SidebarNavigationComponent,
    SidebarExtrasComponent,
    CoreHomeComponent,
    CoreDashboardComponent,
    CoreLecternsComponent,
    CoreToolsComponent,
    HomeTopicComponent,
    HomeAnnouncementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
