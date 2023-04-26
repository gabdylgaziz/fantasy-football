import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component'
import { FantasyComponent } from './fantasy/fantasy.component';
import { AccountComponent } from './account/account.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'fantasy', component: FantasyComponent},
  {path: 'account', component: AccountComponent},
  {path: 'signup', component: SignupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
