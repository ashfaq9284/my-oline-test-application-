import { Component,OnInit,  ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @ViewChild('name') nameKey! :ElementRef;

  constructor(){}

  ngOnInit():void{}

  startTest(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
