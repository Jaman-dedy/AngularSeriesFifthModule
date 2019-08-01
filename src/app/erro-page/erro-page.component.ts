import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-erro-page',
  templateUrl: './erro-page.component.html',
  styleUrls: ['./erro-page.component.css']
})
export class ErroPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }
}
