import { Component, OnInit } from '@angular/core';
import { RouterEvent } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
    items: MenuItem[];
    ngOnInit() {
        this.items = [
           
            {   
                label:'About Me' , 
                icon:'pi pi-fw pi-user',
            },
            {
                label:'Skills',
                icon:'pi pi-fw pi-star',
            
            },
            {
                label:'Projects',
                icon:'pi pi-fw pi-calendar',
            
            },
            {
                label:'Contact',
                icon:'pi pi-fw pi-comments'
            }
        ];
    }    

}



 