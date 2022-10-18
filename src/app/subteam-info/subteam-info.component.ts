import { Component, OnInit } from '@angular/core';
import { subteam_info } from '../subteam-info';

@Component({
  selector: 'app-subteam-info',
  templateUrl: './subteam-info.component.html',
  styleUrls: ['./subteam-info.component.scss']
})
export class SubteamInfoComponent implements OnInit {

  subteams: subteam_info[] = [
    {team_name: "Drone Racing", lead: "Adam Krivoshein", lead_email: "krivosad@oregonstate.edu", meeting_logistics: "Saturdays from 10am-2pm in Kelley 1001"},
    {team_name: "Underwater", lead: "Nathan Jesudason", lead_email: "jesudasn@oregonstate.edu", meeting_logistics: "Sundays at 12pm in Covell 216"},
    {team_name: "Rover", lead: "Kira Kopcho", lead_email: "kopchok@oregonstate.edu", meeting_logistics: "Saturday 10am-4pm in Covell 221"},
    {team_name: "VexU", lead: "Paul Smith", lead_email: "smithp8@oregonstate.edu", meeting_logistics: "Sundays at 10am in Merryfield"}
  ]

  constructor() { }



  ngOnInit(): void {
  }

}
