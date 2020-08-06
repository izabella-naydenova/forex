import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForexComponent } from './forex.component';

const routes: Routes = [{ path: '', component: ForexComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForexRoutingModule {}
