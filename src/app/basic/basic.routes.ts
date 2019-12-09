import {RouterModule} from '@angular/router';
import {BasicComponent} from './basic.component';

export const basicRouting = RouterModule.forChild(
  [
    {path: 'basic', component: BasicComponent}
  ] );
