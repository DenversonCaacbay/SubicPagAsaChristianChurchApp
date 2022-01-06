import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
/*  profileform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    confirmpassword : new FormControl(''),
  })
*/
signupform:FormGroup


  constructor(
    public toastController:ToastController,
    public router:Router,
    private FB: FormBuilder,
    private loginservice:LoginService
    
    ) {}


 // RedirectToOtherPage()
 // {
    //console.log(this.profileForm.value);

 //   this.router.navigateByUrl('/home');
 // }
/*  updateform()
  {
    this.profileform.patchValue({
      firstname: 'Denverson',
      lastname: 'Caacbay',
      username: 'denver.kun',
      email: 'denversoncaacbay@gmail.com',
      password : '123',
      confirmpassword :'123'
    });
  }
*/
  ngOnInit() {
    this.signupform=this.FB.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      contact:['', Validators.required],
      password:['',Validators.required],

    })
  }

  //db
  signup(){
    console.log(this.signupform.value)
    if(this.signupform.valid){
      this.loginservice.submitUser(this.signupform.value).subscribe((rest:any)=>{
        console.log(rest)
        if(rest.data){
          this.router.navigate(['/dashboard'])
          //localStorage.setItem('user',JSON.stringify(rest.data))
        }
        else if(rest.error){
          console.log(rest.error)

        }
      })
    }
  }

  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Register Successfully.',
      duration: 2000,
    });
    toast.present();
  }

}
