import { Component, OnInit } from '@angular/core';
import { person } from '../person';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {

  officers: person[] = [
    {name: "Angel Huang", photo_path: "../assets/People/Members/Angel.jpg", title: "President", contact: "huangang@oregonstate.edu"},
    {name: "JJ Colton", photo_path: "../assets/People/Unassigned.png", title: "Vice President", contact: "coltonj@oregonstate.edu"},
    {name: "Krista Saurez"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
