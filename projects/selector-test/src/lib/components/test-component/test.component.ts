import { Component } from '@angular/core';
import {ZooState} from '../../store/states/zoo.state';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {AddAnimal} from '../../store/actions/zoo.actions';

@Component({
  selector: 'lib-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Select(ZooState.animals) animals: Observable<string[]>;

  constructor(private store: Store) {

  }

  addAnimal() {
    this.store.dispatch(new AddAnimal('some animal'));
  }
}
