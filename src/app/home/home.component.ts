import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showModal:any;
  lblStatus: boolean = false;
  rdValue = 'P';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showModal = new window.bootstrap.Modal(
      document.getElementById("cursoModal")
    );
  }

  openModal() { 
    this.showModal.show();
  }

  closeModal() { 
    this.showModal.hide();
  }

  redirectByRadio() {
    this.showModal.hide();
    if(this.rdValue == 'G') {
      this.router.navigate(['graduacao']);
    } else {
      this.router.navigate(['pos-graduacao']);
    }
  }

  onItemChange(e: any){
    this.rdValue = e.target.value;
  }
}