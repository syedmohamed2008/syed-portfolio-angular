import {
  Component,
  inject
} from '@angular/core';

import {
  LoadingService
} from '../../../core/services/loading';


@Component({
  selector: 'app-loading',

  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class Loading {

  readonly loadingService =
    inject(LoadingService);

}