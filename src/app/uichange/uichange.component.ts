import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-uichange',
  templateUrl: './uichange.component.html',
  styleUrls: ['./uichange.component.css']
})
export class UichangeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  /*Form Group and Form Control Builder */
  profileForm = this.fb.group({
    primaryColor:['#007bff'],
    secondaryColor:['#2c2c2c'],
    spacing:this.fb.group({
      lineHeight:[''],
      letterSpace:['0'],
      wordSpace:['0']
    }),
    buttons:this.fb.group({
      btnColor:['#ffffff'],
      btnBgColor:['#007bff'],
      btnHoverColor:['#0069d9'],
      btnRadius:['4px'],
      btnBorderColor:['#007bff']
    }),
    textfields:this.fb.group({
      txtColor:['#495057'],
      txtBorderColor:['#ced4da'],
      txtBorderColorFocus:['#80bdff'],
      txtRadius:['4px'],
      txtShadow:['rgba(0,123,255,.25)']
    })
  })

  /*Method to Change CSS Variables values*/
  onSubmit() {

    /*Color Properties*/
    document.documentElement.style.setProperty('--primary-color', this.profileForm.get('primaryColor').value);
    document.documentElement.style.setProperty('--secondary-color', this.profileForm.get('secondaryColor').value);

    /*Color Properties*/
    document.documentElement.style.setProperty('--line-height', this.profileForm.get('spacing.lineHeight').value);
    document.documentElement.style.setProperty('--letter-space', this.profileForm.get('spacing.letterSpace').value);
    document.documentElement.style.setProperty('--word-space', this.profileForm.get('spacing.wordSpace').value);

    /*Buttons Characteristics*/
    document.documentElement.style.setProperty('--btn-color', this.profileForm.get('buttons.btnColor').value);
    document.documentElement.style.setProperty('--btn-bg-color', this.profileForm.get('buttons.btnBgColor').value);
    document.documentElement.style.setProperty('--btn-hover-color', this.profileForm.get('buttons.btnHoverColor').value);
    document.documentElement.style.setProperty('--btn-border-color', this.profileForm.get('buttons.btnBorderColor').value);
    document.documentElement.style.setProperty('--btn-radius', this.profileForm.get('buttons.btnRadius').value);

    /*Textbox Characteristics*/
    document.documentElement.style.setProperty('--txtbox-color', this.profileForm.get('textfields.txtColor').value);
    document.documentElement.style.setProperty('--txtbox-border', this.profileForm.get('textfields.txtBorderColor').value);
    document.documentElement.style.setProperty('--txtbox-border-focus', this.profileForm.get('textfields.txtBorderColorFocus').value);
    document.documentElement.style.setProperty('--txtbox-radius', this.profileForm.get('textfields.txtRadius').value);
    document.documentElement.style.setProperty('--txtbox-shadow', this.profileForm.get('textfields.txtShadow').value);
    
  }
 
  ngOnInit(): void {
  }

}
