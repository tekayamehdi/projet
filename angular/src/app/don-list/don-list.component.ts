import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Don} from '../model/Don';
import {DonService} from '../don.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-don-list',
  templateUrl: './don-list.component.html',
  styleUrls: ['./don-list.component.css']
})
export class DonListComponent implements OnInit {

  dons: Observable<Don[]>;

  constructor(private donService: DonService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.dons = this.donService.getDonsList();
  }



  donDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
