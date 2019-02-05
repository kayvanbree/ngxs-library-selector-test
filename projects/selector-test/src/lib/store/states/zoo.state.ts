import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {ZooStateModel} from '../models/zoo-state-model';
import {AddAnimal} from '../actions/zoo.actions';

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

  @Action(AddAnimal)
  public addAnimal(ctx: StateContext<ZooStateModel>, action: AddAnimal) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      animals: [
        ...state.animals,
        action.name
      ]
    });
  }
}
