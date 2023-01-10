import { Component, OnInit } from '@angular/core';
import { person } from '../person';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss'],
})
export class LeadershipComponent implements OnInit {

  officers: person[] = [
    {name: "Angel Huang", photo_path: "./assets/People/Members/Angel.jpg", title: "President", contact: "huangang@oregonstate.edu"},
    {name: "JJ Colton", photo_path: "./assets/People/Unassigned.png", title: "Vice President", contact: "coltonj@oregonstate.edu"},
    {name: "Krista Saurez", photo_path: "./assets/People/Members/Krista-261ibv.jpg", title: "Treasurer", contact: "suarezk@oregonstate.edu"},
    {name: "Nathan Jesudason", photo_path: "./assets/People/Unassigned.png", title: "Secretary", contact: "jesudasn@oregonstate.edu"}
  ]

  advisors: person[] = [
    {name: "Matt Shuman", photo_path: "./assets/People/Advisors/Matt-schuman.jpg", title: "EECS Advisor", contact: "https://eecs.oregonstate.edu/people/shuman-matt"},
    {name: "Dale McCauley", photo_path: "./assets/People/Advisors/Dale-McCauley.jpg", title: "COB Advisor", contact: "https://business.oregonstate.edu/users/dale-mccauley"},
    {name: "Heather Knight", photo_path: "./assets/People/Advisors/heather.jpg", title: "EECS Advisor", contact: "https://eecs.oregonstate.edu/people/knight-heather"},
    {name: "Joe Davidson", photo_path: "./assets/People/Advisors/joe_davidson_resized.jpg", title: "MIME Advisor", contact: "https://mime.oregonstate.edu/people/joe-davidson"},
    {name: "Kiri Wagstaff", photo_path: "./assets/People/Advisors/Kiri-2.png", title: "EECS Advisor", contact: "https://eecs.oregonstate.edu/people/wagstaff-kiri"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
