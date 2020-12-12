import {Component, OnInit} from '@angular/core';
import {Don} from '../model/Don';
import {ActivatedRoute, Router} from '@angular/router';
import {DonService} from '../don.service';

@Component({
    selector: 'app-don-detalis',
    templateUrl: './don-detalis.component.html',
    styleUrls: ['./don-detalis.component.css']
})
export class DonDetalisComponent implements OnInit {

    id: number;
    don: Don;

    constructor(private route: ActivatedRoute, private router: Router,
                private donService: DonService) {
    }

    ngOnInit() {
        this.don = new Don();

        this.id = this.route.snapshot.params.id;

        this.donService.getDon(this.id)
            .subscribe(data => {
                console.log(data);
                this.don = data;
            }, error => console.log(error));
    }

    list() {
        this.router.navigate(['dons']);
    }
}
