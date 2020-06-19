import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  public taskData:Array<any>;
  constructor() { }

  ngOnInit() {
    this.taskData = [{
      'name': 'Jovenica',
      'image': '../../../../assets/chat/chat/user.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
      'status':'online',
      'count': '2',
      'time':'2 min ago'
    
    }, {
      'name': 'Oliver',
      'image': ' ../../../../assets/chat/chat/user3.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
      'status':'offline',
      'badge':'4',
      'sendTime':'18:34',
      'group': true
      
    }, {
      'name': 'George',
      'image': ' ../../../../assets/chat/chat/user4.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
      'status':'offline',
      'count': '2',
      'sendTime':'18:30',
      'broadcast': true
 
    }, {
      'name': 'Harry',
      'image': ' ../../../../assets/chat/chat/user1.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
       'status':'online',
       'badge':'6',
      'sendTime':'17:55'
    }, {
      'name': 'Jack',
      'image': ' ../../../../assets/chat/chat/user.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
      'status':'offline',
      'sendTime':'17:55'
    }, {
      'name': 'Jacob',
      'image': ' ../../../../assets/chat/chat/user3.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
      'status':'offline',
      'count': '1',
      'sendTime':'17:50'
    }, {
      'name': 'Noah',
      'image': ' ../../../../assets/chat/chat/user2.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
      'status':'offline',
      'sendTime':'17:40'
    }, {
      'name': 'Charlie',
      'image': ' ../../../../assets/chat/chat/user4.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
       'status':'online',
      'count': '6',
      'badge':'8',
      'sendTime':'17:40'
    }, {
      'name': 'Logan',
      'image': ' ../../../../assets/chat/chat/user.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
      'status':'offline',
      'badge':'8',
      'sendTime':'17:40'
    }, {
      'name': 'Harrison',
      'image': ' ../../../../assets/chat/chat/user2.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
       'status':'offline',
      'sendTime':'17:40'
    }, {
      'name': 'Sebastian',
      'image': ' ../../../../assets/chat/chat/user1.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
      'status':'online',
      'sendTime':'17:40'
    }, {
      'name': 'Zachary',
      'image': ' ../../../../assets/chat/chat/user4.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!', 
      'status':'offline',
      'sendTime':'17:40'
    }, {
      'name': 'Elijah',
      'image': ' ../../../../assets/chat/chat/user3.jpeg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'status':'offline',
      'badge':'8',
      'sendTime':'17:40'
    }
    ]  
  }

}
