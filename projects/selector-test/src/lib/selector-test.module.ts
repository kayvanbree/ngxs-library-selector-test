import { NgModule } from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import { TestComponent } from './components/test-component/test.component';
import {CommonModule} from '@angular/common';
import {ZooState} from './store/states/zoo.state';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([ZooState])
  ],
  exports: [
    TestComponent
  ]
})
export class SelectorTestModule { }
