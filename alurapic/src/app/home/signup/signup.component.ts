import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NewUser } from "./new-user";
import { SignUpService } from "./signup.service";
import { Router } from "@angular/router";

@Component({
    templateUrl:'./signup.component.html'
})
export class SignUpComponent implements OnInit{
    
    cadastroForm: FormGroup;
    @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;
    
    constructor(private formBuilder: FormBuilder, private signupService: SignUpService, private router:Router){
        
    }

    ngOnInit(): void {
      this.cadastroForm = this.formBuilder.group({
        email:['',
            [
                Validators.required,
                Validators.email
            ]
        ],
        fullName:['',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]
        ],
        userName:['',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20),
                Validators.pattern(/^[a-z0-9_\-]+$/)
            ]

        ],
        password:['',
            [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)
            ]
        ]
      })
      this.inputEmail.nativeElement.focus();
    }

    signup(){
        const newUser = this.cadastroForm.getRawValue() as NewUser;
        this.signupService
            .signup(newUser)
            .subscribe( () => this.router.navigate(['']));
    }
}