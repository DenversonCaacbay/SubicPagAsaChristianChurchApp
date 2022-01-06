import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomeService } from '../services/home.service';


import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
profileForm:FormGroup
data: any=[];
  constructor(public router:Router, private fb : FormBuilder, private homeService : HomeService) { }
  
  ngOnInit() {
    this.getLocalStorage();
    this.profileForm=this.fb.group({
      id:[this.data.id],
      fullname:[this.data.fullname],
      email:[this.data.email],
      contact:[this.data.contact],
      password:[this.data.password]

    })
  }

  update(){
    this.homeService.updateRequest(this.profileForm.value).subscribe((res:any)=>{
      if(res.data){
        this.router.navigate(['/profile'])
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      else if(res.data){
        console.log(res.data);
      }
    });
  }

  getLocalStorage(){
  this.data = JSON.parse(localStorage.getItem("user"));
    console.log(this.data);
  }
  
  goToEdit()
  {
    this.router.navigateByUrl('/edit');
  }

  RedirectToOtherPage1()
  {
    this.router.navigateByUrl('/dashboard');
  }
  RedirectToOtherPage2()
  {
    this.router.navigateByUrl('/activities');
  }
  RedirectToOtherPage3()
  {
    this.router.navigateByUrl('/service');
  }
  RedirectToOtherPage4()
  {
    this.router.navigateByUrl('/profile');
  }

}
