import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { subteam_info } from '../subteam-info';

@Component({
  selector: 'app-subteam-info',
  templateUrl: './subteam-info.component.html',
  styleUrls: ['./subteam-info.component.scss']
})
export class SubteamInfoComponent implements OnInit {

  constructor(private dataService: DataService) { }

  subteams: subteam_info[] = this.dataService.subteams

  ngOnInit(): void {
  }

}
