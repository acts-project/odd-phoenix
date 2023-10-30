import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ODDComponent } from './pages/odd/odd.component';

const routes: Routes = [
  {
    path: '',
    component: ODDComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
