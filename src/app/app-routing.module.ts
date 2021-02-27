import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

const routes: Routes = [
  
  { 
      path: '', pathMatch: 'full', 
      redirectTo: 'about-page',
  },
  
  {
  path: 'nav-bar',
  component: NavBarComponent
  },
  {
    path:'about-page',
    component:AboutPageComponent
  },
  {
    path: 'skills-section',
    component: SkillsSectionComponent
    },
    {
      path:'project-section',
      component:ProjectSectionComponent
    },
    {
      path: 'contact-section',
      component: ContactSectionComponent
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
