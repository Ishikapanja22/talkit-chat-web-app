import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-window',

  templateUrl: './chat-window.component.html',

  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent
implements OnInit {

  currentUser:any = {

    name:'Ishika',

    email:'ishika@gmail.com'

  };

  searchText = '';

  currentMessage = '';

  selectedUser:any = null;

  messages:any[] = [];

  filteredUsers:any[] = [];

  showMenu = false;

  users:any[] = [

    {
      id:1,
      name:'Alice Johnson',
      online:true,
      color:'#7b2ff7'
    },

    {
      id:2,
      name:'Rahul Sharma',
      online:true,
      color:'#9333ea'
    },

    {
      id:3,
      name:'Sophia Lee',
      online:false,
      color:'#c084fc'
    },

    {
      id:4,
      name:'David Miller',
      online:true,
      color:'#6d28d9'
    },

    {
      id:5,
      name:'Emma Watson',
      online:false,
      color:'#8b5cf6'
    }

  ];

  constructor(
    private router:Router,
    private chatService:ChatService
  ){}

  /* INIT */

  ngOnInit(): void {

    const savedUser =
      localStorage.getItem(
        'currentUser'
      );

    if(
      savedUser &&
      savedUser !== 'undefined'
    ){

      this.currentUser =
        JSON.parse(savedUser);

    }

    this.filteredUsers =
      [...this.users];

  
  /* AUTO SELECT FIRST USER */

if(this.users.length > 0){

this.selectUser(
  this.users[0]
);

}

}

  /* SELECT USER */

  selectUser(user:any){

    this.selectedUser = user;

    this.messages = [];
    this.loadMessages();

  }

  /* SEARCH USERS */

  filterUsers(){

    this.filteredUsers =

      this.users.filter((user:any)=>

        user.name
          .toLowerCase()
          .includes(
            this.searchText.toLowerCase()
          )

      );

  }

  /* SEND MESSAGE */

 sendMessage(){

  if(!this.currentMessage.trim()){
    return;
  }

  if(!this.selectedUser){

    alert(
      'Please Select Chat User'
    );

    return;

  }

  const data = {

    senderEmail:
      this.currentUser.email,

    senderName:
      this.currentUser.name,

    receiverName:
      this.selectedUser.name,

    content:
      this.currentMessage

  };

  this.chatService

    .sendMessage(data)

    .subscribe({

      next:(res:any)=>{

        this.messages = [

          ...this.messages,

          res

        ];

        this.currentMessage = '';

        setTimeout(()=>{

          this.autoReply();

        },1200);

      },

      error:(err)=>{

        console.log(err);

      }
    });


  }
  /* AUTO REPLY */

  autoReply(){

    if(!this.selectedUser){
      return;
    }

    const replies = [

      'Okay 👍',

      'Sounds Great 😊',

      'Awesome 🔥',

      'Interesting 👀',

      'Haha 😂',

      'Lets do it',

      'Sure!',

      'Nice idea 🔥',

      'Cool 😎',

      'I agree 😊'

    ];

    const randomReply =

      replies[
        Math.floor(
          Math.random() *
          replies.length
        )
      ];

    const reply = {

      senderName:
        this.selectedUser.name,

      content:
        randomReply

    };

    this.messages = [

      ...this.messages,

      reply

    ];

  }
 loadMessages(){

  if(!this.selectedUser){
    return;
  }

  this.chatService

    .getMessages(

      this.currentUser.name,

      this.selectedUser.name

    )

    .subscribe({

      next:(res:any)=>{

        this.messages = res;

      },

      error:(err)=>{

        console.log(err);

      }

    });

}
  /* FILE */

  onFileSelected(event:any){

    const file =
      event.target.files[0];

    if(file){

      const fileMessage = {

        senderName:
          this.currentUser.name,

        content:
          '📎 File Sent: ' +
          file.name

      };

      this.messages = [

        ...this.messages,

        fileMessage

      ];

    }

  }

  /* EDIT PROFILE */

  openProfileEditor(){

    this.router.navigate([
      '/edit-profile'
    ]);

  }

  /* LOGOUT */

  logout(){

    localStorage.removeItem(
      'currentUser'
    );

    localStorage.removeItem(
      'token'
    );

    this.router.navigate([
      '/logout'
    ]);

  }

}