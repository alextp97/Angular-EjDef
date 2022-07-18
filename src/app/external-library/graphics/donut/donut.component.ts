import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Phone } from '../../interfaces/mobile.interface';
import { GraphService } from '../../services/graph.service';
import { defaultDonutCharData } from './defaultDonutCharData';

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

  //A este ChartData le asigno las propiedades del defaultBarCharData que me he creado antes
  public pieChartData: ChartData<'pie'> = defaultDonutCharData;


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
