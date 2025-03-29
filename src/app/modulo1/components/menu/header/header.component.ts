import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
//import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
   envs = environment
 }
