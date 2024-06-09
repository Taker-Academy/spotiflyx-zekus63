import { Component } from '@angular/core';

declare function initSearchBar(): void;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    ngOnInit() {
        initSearchBar();
    }
    title = 'Spotiflyx';
}