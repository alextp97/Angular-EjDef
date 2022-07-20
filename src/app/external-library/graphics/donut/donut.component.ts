import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Phone } from '../../interfaces/mobile.interface';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  //Declaro las propiedades
  phoneName: string[] = [];
  phoneFavourite: number[] = [];
  phones: Phone[] = [];


  constructor( private graphService: GraphService) { }

  //Declaro que esta gráfica va a ser de tipo pie
  public pieChartType: ChartType = 'pie';

  //Inicializo los datos con un arreglo vacio para pasarle los datos más adelante
  public pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: []
  };


  //Configuración de las opciones de la gráfica pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };


  ngOnInit(): void {

    //Cuando se inicia la app llamo a la funcion que me trae todos los teléfonos de la api
    this.graphService.getPhones()
      .subscribe( datas => {
        this.phones = datas.data.phones;

        //Con el bucle for recorro todos los teléfonos para sacar sus nombres y el número de favoritos
        for (let phone of this.phones){

          this.phoneName.push(phone.phone_name);
          this.phoneFavourite.push(phone.favorites)
        }

        //Asigno la información a sus respectivos campos para que se muestre en la gráfica
        this.pieChartData = {
          labels: this.phoneName,
          datasets: [
            { data: this.phoneFavourite, label: 'Popularidad'}
          ]
        }
      })
  }

}
