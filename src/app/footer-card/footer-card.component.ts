import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "footer-card",
  templateUrl: "./footer-card.component.html",
  styleUrls: ["./footer-card.component.css"],
})
export class FooterCardComponent implements OnInit {
  @Input()
  some: any;

  @Output()
  footerEmitter = new EventEmitter<any>();

  aData = {
    aProp: "aValue"
  }

  ngOnInit() {}

  onClickMe() {
    this.footerEmitter.emit(this.aData);
  }
}
