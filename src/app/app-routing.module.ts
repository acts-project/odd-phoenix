import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenDataDetector } from './pages/open-data-detector/open-data-datector.component';

const routes: Routes = [
  {
    path: '',
    component: OpenDataDetector,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
