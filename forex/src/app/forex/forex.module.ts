import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForexComponent } from './forex.component';
import { ForexRoutingModule } from './forex-routing.module';
import { NzZorroModule } from '../shared/nz-zorro.module';

@NgModule({
  declarations: [ForexComponent],
  imports: [CommonModule, ForexRoutingModule, NzZorroModule],
  providers: [],
  exports: [],
})
export class ForexModule {}
