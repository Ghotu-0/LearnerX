import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-topic',
  templateUrl: './home-topic.component.html',
  styleUrls: ['./home-topic.component.css']
})
export class HomeTopicComponent implements OnInit {

  hello = "";
  topicImageRef="https://picsum.photos/200/300";
  topicOwnerLogo="https://picsum.photos/200/300";
  topicHeading="Learnerx How To use and What else to say check out it now";
  topicOwnerName="LearnerX";
  topicViews="1M";
  topicPoints="1K";
  topicTimeline="2d";
  topicLikes="1K";


  constructor() { }


  ngOnInit(): void {
   
  }

}
