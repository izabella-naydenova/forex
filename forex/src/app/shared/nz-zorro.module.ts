import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzListModule } from 'ng-zorro-antd/list';

const ngZorroModules = [NzDividerModule, NzListModule, NzIconModule];

@NgModule({
  declarations: [],
  imports: [...ngZorroModules],
  exports: [...ngZorroModules],
})
export class NzZorroModule {}
