// LINK FOR ARTICLE -> https://firstclassjs.com/display-a-loader-on-every-http-request-using-interceptor-in-angular-7/

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class LoaderService {
    isLoading = new Subject<boolean>();
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}