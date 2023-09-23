import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../Data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = ""
  contentTitle: string ="Titulo do conteudo"
  contentDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac efficitur ipsum. Donec vel blandit quam. Duis congue facilisis turpis sit amet volutpat. Duis eu sem bibendum, hendrerit est condimentum, feugiat ex. Ut massa nibh, eleifend a odio at, condimentum ultrices neque. Donec libero orci, molestie sed nulla eu, pharetra varius lectus. Mauris volutpat feugiat posuere. Donec dapibus est id arcu varius, et tristique ante dapibus. Mauris consequat faucibus justo, nec eleifend odio cursus nec. Proin commodo sapien velit, non accumsan metus tincidunt vestibulum. Ut sed nisl vel orci consectetur rhoncus ac vel nulla"
  private id: string | null = "0"
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe ( value =>
    this.id = value.get("Id")
    )

    this.setValuesToComponent(this.id)
  }
setValuesToComponent (id:string | null){
  const result = dataFake.filter(article => article.Id == id)[0]
       this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
}
}
