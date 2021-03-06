import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {

  segmentTab: any;
  chatData: any;

  constructor(public router: Router) {
    this.chatData = [{
      'name': 'Enappd',
      'image': '../../../../assets/chat/chat/enappd.png',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '2',
      'time': '11:32 PM',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../../../assets/chat/chat/crown.png'

    }, {
      'name': 'Jovenica Alba',
      'image': '../../../../assets/chat/chat/chat1.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '2',
      'time': '12:17',
      'distance': '6km',
      'type': 'PRO',
      'crown': '../../../../assets/chat/chat/crown.png',
    }, {
      'name': 'Oliver',
      'image': ' ../../../../assets/chat/chat/chat2.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': '12:17',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../../../assets/chat/chat/crown1.png',
    }, {
      'name': 'George',
      'image': ' ../../../../assets/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '2',
      'time': 'Yesterday',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../../../assets/chat/chat/crown1.png',
    }, {
      'name': 'Harry',
      'image': ' ../../../../assets/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Sunday',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../../../assets/chat/chat/crown.png',
    }, {
      'name': 'Jack',
      'image': ' ../../../../assets/chat/chat/chat5.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': '11:15',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../../../assets/chat/chat/crown1.png',
    }, {
      'name': 'Jacob',
      'image': ' ../../../../assets/chat/chat/chat6.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '1',
      'time': 'Yesterday',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../../../assets/chat/chat/crown1.png',
    }, {
      'name': 'Noah',
      'image': ' ../../../../assets/chat/chat/chat7.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Monday',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../../../assets/chat/chat/crown.png',
    }, {
      'name': 'Charlie',
      'image': ' ../../../../assets/chat/chat/chat8.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '6',
      'time': '07:00',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../../../assets/chat/chat/crown1.png',
    }, {
      'name': 'Logan',
      'image': ' ../../../../assets/chat/chat/chat1.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Yesterday',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../../../assets/chat/chat/crown.png',

    }, {
      'name': 'Harrison',
      'image': ' ../../../../assets/chat/chat/chat2.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Yesterday',
      'distance': '6km',
      'type': 'Basic', 'crown': '../../../../assets/chat/chat/crown1.png',

    }, {
      'name': 'Sebastian',
      'image': ' ../../../../assets/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      'time': 'Yesterday',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../../../assets/chat/chat/crown.png'
    }, {
      'name': 'Zachary',
      'image': ' ../../../../assets/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Today',
      'distance': '6km',
      'type': 'Basic', 'crown': '../../../../assets/chat/chat/crown1.png',

    }, {
      'name': 'Elijah',
      'image': ' ../../../../assets/chat/chat/chat5.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': '18:25',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../../../assets/chat/chat/crown.png',
    }
    ];
  }

  ngOnInit() {
    this.segmentTab="chat";
  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }
   goToChat() {
     this.router.navigate(['/chat']);
   }
}
