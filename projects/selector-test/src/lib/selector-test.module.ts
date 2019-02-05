import { NgModule } from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {ZooState} from './store/states/zoo.state';
import { TestComponent } from './components/test-component/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [
    NgxsModule.forFeature([
      ZooState
    ])
  ],
  exports: [
    TestComponent
  ]
})
export class SelectorTestModule { }
