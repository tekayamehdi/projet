import {Component, OnInit} from '@angular/core';
import {Don} from '../model/Don';
import {Router} from '@angular/router';
import {DonService} from '../don.service';

@Component({
    selector: 'app-createdon',
    templateUrl: './createdon.component.html',
    styleUrls: ['./createdon.component.css']
})
export class CreatedonComponent implements OnInit {
    don: Don = new Don();
    submitted = false;

    constructor(private donService: DonService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    newDon(): void {
        this.submitted = false;
        this.don = new Don();
    }

    save() {
        this.donService
            .createDon(this.don).subscribe(data => {
                console.log(data);
                this.don = new Don();
                this.gotoList();
            },
            error => console.log(error));
    }

    onSubmit() {
        this.submitted = true;
        this.save();
    }

    gotoList() {
        this.router.navigate(['/dons']);
    }

}
