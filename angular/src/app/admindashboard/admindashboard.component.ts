import {Component, enableProdMode, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';

@Component({
    selector: 'app-admindashboard',
    templateUrl: './admindashboard.component.html',
    styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

    content: string;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getAdminBoard().subscribe(
            data => {
                this.content = data;
            },
            err => {
                this.content = JSON.parse(err.error).message;
            }
        );

    }
}
