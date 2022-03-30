import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';

const routes: Routes = [

  {
    path: "privacy",
    component: PrivacyComponent
  },
  {
    path: "",
    component: DefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
