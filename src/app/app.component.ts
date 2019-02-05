import { Component } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ZooState} from '../../projects/selector-test/src/lib/store/states/zoo.state';
import {Observable} from 'rxjs';
import {AddAnimal} from '../../projects/selector-test/src/lib/store/actions/zoo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxs-library-selector-test';

  // @Select(ZooState.animals) animals: Observable<string[]>;
  @Select(ZooState.something('something')) animals: Observable<string[]>;

  constructor(private store: Store) {

  }

  addAnimal() {
    this.store.dispatch(new AddAnimal('some animal'));
  }
}
