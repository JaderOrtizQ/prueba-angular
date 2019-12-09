import {RouterModule} from '@angular/router';
import {IntermediateComponent} from './intermediate.component';

export const intermediateRouting = RouterModule.forChild(
  [
    {path: 'intermediate', component: IntermediateComponent}
  ] );
