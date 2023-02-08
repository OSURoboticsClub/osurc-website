import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { subteam_info } from '../subteam-info';

@Component({
  selector: 'app-vexu',
  templateUrl: './vexu.component.html',
  styleUrls: ['./vexu.component.scss']
})
export class VexuComponent implements OnInit {

  constructor(private dataService: DataService) { }

  subteams: string = this.dataService.subteams.find(s => s.team_name.localeCompare("VexU"))!.lead_email

  ngOnInit(): void {
  }

}
