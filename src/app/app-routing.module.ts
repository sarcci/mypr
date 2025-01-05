import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { IspCrudComponent } from './isp-crud/isp-crud.component';
import { EditispComponent } from './editisp/editisp.component';
import { ExamslistComponent } from './examslist/examslist.component';
import { EditexamComponent } from './editexam/editexam.component';
import { NewispComponent } from './newisp/newisp.component';
import { NewexComponent } from './newex/newex.component';
import { NewkolComponent } from './newkol/newkol.component';
import { KolexamlistComponent } from './kolexamlist/kolexamlist.component';
import { EditkolComponent } from './editkol/editkol.component';
import { KolslistComponent } from './kolslist/kolslist.component';
import { WelComponent } from './wel/wel.component';
import { NewkolexamComponent } from './newkolexam/newkolexam.component';
import { EditkolexamComponent } from './editkolexam/editkolexam.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
  path: 'register',
  component: RegisterComponent,
  },
  {
  path: 'isp',
  component: IspCrudComponent,
  },
  { 
    path: 'editisp/:id', 
    component: EditispComponent
  },
  {
    path:'exams/:id',
    component: ExamslistComponent
  },
  { 
    path: 'editEx/:id/:isp', 
    component: EditexamComponent 
  },
  { 
    path: 'addisp', 
    component: NewispComponent
  },
  { 
    path: 'addex/:isp', 
    component: NewexComponent
  },
  { 
    path: 'newkol', 
    component: NewkolComponent },
  { 
    path: 'listKolokviumi/:id', 
    component: KolexamlistComponent },
  { 
    path: 'editkol/:id', 
    component: EditkolComponent 
  },
  {
    path: 'kolokviumski',
    component: KolslistComponent
  },
  {
    path: 'home',
    component: WelComponent
  },
  {
    path: 'newkolexam/:id',
    component: NewkolexamComponent
  },
  {
    path: 'editkolexam/:id/:kol',
    component: EditkolexamComponent
  },
  {
    path: 'site/:studiska',
    component: AllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
