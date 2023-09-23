import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input ()
  cardTitle: string = "Mini-card's TiTle"
@Input ()
  photoCover: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
  constructor() { }
@Input ()
Id: string = "0"
  ngOnInit(): void {
  }

}
