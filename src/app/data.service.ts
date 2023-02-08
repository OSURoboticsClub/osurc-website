import { Injectable } from '@angular/core';
import { person } from './person';
import { subteam_info } from './subteam-info';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  subteams: subteam_info[] = [
    {team_name: "Drone Racing", lead: "Adam Krivoshein", lead_email: "krivosad@oregonstate.edu", meeting_time: "Sundays from 10am-2pm", meeting_location: "Kelley 1001", meeting_location_link: "https://goo.gl/maps/jpUwQDSZqW4uZLyX6"},
    {team_name: "Underwater", lead: "Nathan Jesudason", lead_email: "jesudasn@oregonstate.edu", meeting_time: "Sundays at 12pm", meeting_location: "Covell 216", meeting_location_link: "https://goo.gl/maps/kw45P8dYkQ4d7Xah6"},
    {team_name: "Rover", lead: "Kira Kopcho", lead_email: "kopchok@oregonstate.edu", meeting_time: "Saturday 10am-4pm", meeting_location: "Covell 221", meeting_location_link: "https://goo.gl/maps/kw45P8dYkQ4d7Xah6"},
    {team_name: "VexU", lead: "Paul Smith", lead_email: "smithp8@oregonstate.edu", meeting_time: "Sundays at 10am", meeting_location: "Merryfield", meeting_location_link: "https://goo.gl/maps/RemhRU9Fbwb6avLn8"}
  ]
}
