import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Don} from '../model/Don';
import {DonService} from '../don.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-don-list',
    templateUrl: './don-list.component.html',
    styleUrls: ['./don-list.component.css']
})
export class DonListComponent implements OnInit {

    dons: Observable<Don[]>;
    id: number;
    don: Don;

    constructor(private donService: DonService,
                private router: Router,
                private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.reloadData();
        this.id = this.route.snapshot.params.id;

        this.donService.getDon(this.id)
            .subscribe(data => {
                console.log(data);
                this.don = data;
            }, error => console.log(error));
    }

    reloadData() {
        this.dons = this.donService.getDonsList();
    }

    donDetails(id: number) {
        this.router.navigate(['details', id]);
    }

    deletedon(id: number) {
        this.donService.deletedon(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log(error));
    }
}
