import {createSelector, Selector, State} from '@ngxs/store';
import {ZooStateModel} from '../models/zoo-state-model';

// @dynamic
@State<ZooStateModel>({
  name: 'zoo',
  defaults: {
    animals: [
      'Parrot',
      'Monkey'
    ]
  }
})
export class ZooState {
  @Selector()
  static animals(state: ZooStateModel) {
    return state.animals;
  }

  static something(something: string) {
    return createSelector([ZooState], (state: ZooStateModel) => {
      return state.animals;
    });
  }
}
