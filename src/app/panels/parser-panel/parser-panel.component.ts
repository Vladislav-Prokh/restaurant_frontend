import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environment';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-parser-panel',
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './parser-panel.component.html',
  styleUrl: './parser-panel.component.css'
})


export class ParserPanelComponent {
  parseDataForm: FormGroup;
  types = environment.item_types;
  apiUrl: string = '';
  private amountOfSavedRecords:number = 0;
  wasOccurredError = false;

  constructor(private http: HttpClient, private fb: FormBuilder,) {
    this.apiUrl =  environment.apiUrl;
    this.parseDataForm = this.fb.group({
      urlWebsite: [null],
      userAgent: "Chrome/4.0.249.0 Safari/532.5",
      referrer: "https://www.google.com" ,
      itemType: [null],
      listClass: [null],
      nameClass:[null],
      descriptionClass:[null],
      priceClass:[null]
    });
  }

  onSubmit() {
    this.http.post<any>(`${this.apiUrl}/menu-items`, this.parseDataForm.value).subscribe(
      (response) => {
        this.amountOfSavedRecords = response;
        this.wasOccurredError = false;
      },
      (error) => {
        console.error('there is an error:', error);
        this.wasOccurredError = true;
      }
    );
  }
  getAmountOfSavedRecords():number{
    return this.amountOfSavedRecords;
  }
  closeSuccessAlert(){
    this.amountOfSavedRecords = 0;
  }
  closeErrorAlert(){
    this.wasOccurredError = false;
  }
}
