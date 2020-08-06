import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'trading',
    loadChildren: () =>
      import('./forex/forex.module').then((m) => m.ForexModule),
  },
  { path: '**', redirectTo: '/trading', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
