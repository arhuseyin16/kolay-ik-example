import {Component, Input, OnInit} from '@angular/core';
import {LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: any;

  constructor(private location: LocationStrategy) {}

  ngOnInit(): void {
  }

  getAvatar(firstName: string, lastName: string): string {
    return firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase();
  }

  goBack() {
    this.location.back()
  }
}
