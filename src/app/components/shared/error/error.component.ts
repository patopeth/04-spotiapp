import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: []
})
export class ErrorComponent implements OnInit {
  @Input() error: any;

  mensajeError: string;
  statusError: number;

  constructor() {
  }

  ngOnInit() {
    this.mensajeError = this.error.error.error.message;
    this.statusError = this.error.status;

  }

}
