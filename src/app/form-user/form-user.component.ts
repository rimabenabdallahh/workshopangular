import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  user: User=new User();
  ngOnInit(): void {
    this.user=new User();
  }
  addUser() 
  { this.user.category='Customer'
    console.log(this.user)}

}
