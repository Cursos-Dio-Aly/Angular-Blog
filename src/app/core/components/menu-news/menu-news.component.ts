import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-news',
  templateUrl: './menu-news.component.html',
  styleUrls: ['./menu-news.component.scss']
})
export class MenuNewsComponent {
  smallPosts: any[] = [
    {
      titulo: 'Python: por que a linguagem é tão usada para Data Science e finanças?', image: 'https://tm.ibxk.com.br/2023/09/06/06153210996363.jpg?ims=164x118', dataPost: 'MAIO 20, 2024'
    },
    {
      titulo: 'GitHub agora permite fazer login sem precisar de senha; entenda como.', image: 'https://tm.ibxk.com.br/2023/07/12/12115957215144.jpg?ims=164x118', dataPost: 'MAIO 10, 2024'
    },
    {
      titulo: 'Algoritmo e estrutura de dados; Para quê serve? Quando vou usar? veja.', image: 'https://tm.ibxk.com.br/2022/09/16/16153701405064.jpg?ims=164x118', dataPost: 'ABRIL 21, 2024'
    }
  ];
}
