import { Component } from '@angular/core';
import {Select} from '@ngxs/store';
import {ZooState} from '../../projects/selector-test/src/lib/store/states/zoo.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxs-library-selector-test';

  @Select(ZooState.animals) animals: Observable<string[]>;
  // @Select(ZooState.something('something')) lala: Observable<string[]>;
}
