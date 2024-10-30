import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {FormBuilder, FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputMaskModule} from "primeng/inputmask";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {SelectItem} from "primeng/api";
import {TableModule} from "primeng/table";
import {NavbarComponent} from "../navbar/navbar.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {RadioButtonModule} from "primeng/radiobutton";
import {MultiSelectModule} from "primeng/multiselect";
import {KnobModule} from "primeng/knob";
import {Button} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {FormClass} from "../../models/form-data";
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    PasswordModule,
    DividerModule,
    FormsModule,
    FloatLabelModule,
    InputMaskModule,
    CheckboxModule,
    DropdownModule,
    TableModule,
    NavbarComponent,
    NgStyle,
    RadioButtonModule,
    MultiSelectModule,
    KnobModule,
    Button,
    RatingModule,
    ReactiveFormsModule,
    NgForOf,
    RouterLink,
    NgIf,
    InputTextModule,
    KeyFilterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  radioButtonGoster: boolean = false;
  checkboxButtonGoster: boolean = false;
  form = new FormClass()


  languages = [
    {key: 'java', name: 'Java'},
    {key: 'csharp', name: 'C#'},
    {key: 'flutter', name: 'Flutter'},
    {key: 'angular', name: 'Angular'},
    {key: 'html', name: 'HTML'},
    {key: 'css', name: 'CSS'},
    {key: 'bash', name: 'Bash'},
    {key: 'sql', name: 'SQL'},
    {key: 'phyton', name: 'Phyton'}
  ];
  rakamlar = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5}
  ];


  value2: any;
  formGroup!: FormGroup;

  constructor() {
  }

  categories: any[] = [
    {name: '1.Sınıf', key: '1'},
    {name: '2.Sınıf', key: '2'},
    {name: '3.Sınıf', key: '3'},
    {name: '4.Sınıf', key: '4'},
    {name: 'Diğer', key: '5'},

  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedCategory: new FormControl()
    });
  }


  selectedCategories: any[] = [];

  categories1: any[] = [
    {name: 'Frontend Geliştirme', key: 'a'},
    {name: 'Backend Geliştirme', key: 'b'},
    {name: 'Mobil Geliştirme', key: 'c'},
    {name: 'Sistem Destek', key: 'd'},
    {name: 'Ürün Geliştirme', key: 'e'},
    {name: 'İnsan Kaynakları', key: 'f'},
    {name: 'Eğitim Teknolojileri', key: 'g'},
    {name: 'Pazarlama', key: 'h'},
    {name: 'Diğer', key: 'j'}

  ];
  selectedValues: string[] = [];
  deneme: any;

  denemeee(key: any) {
    if (key == 5) {
      this.radioButtonGoster = true;
    } else {
      this.radioButtonGoster = false;
    }
  }

  denemeee2(category2: any) {
    let deneme = this.selectedCategories.filter(filtre => {
      filtre.includes('j')
    })
    if (deneme) {
      this.checkboxButtonGoster = true;
    } else {
      this.checkboxButtonGoster = false;
    }
  }

  aaa(puan: any) {

  }

  denemeeee(language: any, rakam: any) {
    console.log('language', language)
    console.log('rakam', rakam)
  }

  ratingsMap: { [key: string]: number } = {};


}

