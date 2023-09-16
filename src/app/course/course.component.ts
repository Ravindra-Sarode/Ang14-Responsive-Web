import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }

  course=[ 
    {'id':1, 'name':'Learn Angular', 'description': 'Angular will prompt you to configure the project. For the default settings, you can press the Enter or Return keys', 'image':'../../assets/angular.jpg'},
    {'id':2, 'name':'Learn Typescript', 'description': 'Angular will prompt you to configure the project. For the default settings, you can press the Enter or Return keys', 'image':'../../assets/typescript.jpg'},
    {'id':3, 'name':'Learn NodeJs', 'description': 'Angular will prompt you to configure the project. For the default settings, you can press the Enter or Return keys', 'image':'../../assets/nodejs.jpg'},
    {'id':4, 'name':'Learn ReactJs', 'description': 'Angular will prompt you to configure the project. For the default settings, you can press the Enter or Return keys', 'image':'../../assets/reactjs.jpg'}
  
  ]

}
