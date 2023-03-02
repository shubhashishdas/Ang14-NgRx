import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebSeriesComponent } from './web-series/web-series.component';
import { DetailComponent } from 'src/app/shared/details/detail.component';

const routes: Routes = [
  {
    path: '',
    title: 'Web Series',
    component: WebSeriesComponent
  },
  {
    path:':id',
    title: 'Details',
    component: DetailComponent
  }
]

@NgModule({
  declarations: [
    WebSeriesComponent,
    // DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WebSeriesModule { }
