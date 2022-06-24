import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-graducao',
  templateUrl: './graducao.component.html',
  styleUrls: ['./graducao.component.scss']
})

export class GraducaoComponent implements OnInit{
  
  arrCursos: any[] = [
    {name: 'Administração', src: 'https://placehold.jp/400x280.png', alt: 'Administração'},
    {name: 'Ciencia da computação', src: 'https://placehold.jp/400x280.png', alt: 'Ciencia da computação'},
    {name: 'Ciencias Contábeis', src: 'https://placehold.jp/400x280.png', alt: 'Ciencias Contábeis'},
    {name: 'Direito', src: 'https://placehold.jp/400x280.png', alt: 'Direito'},
    {name: 'Engenharia Civil', src: 'https://placehold.jp/400x280.png', alt: 'Engenharia Civil'},
    {name: 'Engenharia de Produção', src: 'https://placehold.jp/400x280.png', alt: 'Engenharia de Produção'},
    {name: 'Pedagogia', src: 'https://placehold.jp/400x280.png', alt: 'Pedagogia'},
    {name: 'Análise e desenvolvimento de sistemas', src: 'https://placehold.jp/400x280.png', alt: 'Análise e desenvolvimento de sistemas'},
    {name: 'Gestão Comercial', src: 'https://placehold.jp/400x280.png', alt: 'Gestão Comercial'},
    {name: 'Gestão de Recursos Humanos', src: 'https://placehold.jp/400x280.png', alt: 'Gestão de Recursos Humanos'},
    {name: 'Gestão Financeira', src: 'https://placehold.jp/400x280.png', alt: 'Gestão Financeira'},
    {name: 'Logística', src: 'https://placehold.jp/400x280.png', alt: 'Logística'},
    {name: 'Processos Gerenciais', src: 'https://placehold.jp/400x280.png', alt: 'Processos Gerenciais'},
    {name: 'Redes de Computadores', src: 'https://placehold.jp/400x280.png', alt: 'Redes de Computadores'}
  ];

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };  

  constructor() { }

  ngOnInit(): void {
    
  }

}
