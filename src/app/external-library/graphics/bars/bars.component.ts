import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Phone } from '../../interfaces/mobile.interface';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  //Declaro las propiedades
  phoneName: string[] = [];
  phoneFavourite: number[] = [];
  phones: Phone[] = [];

  constructor(private graphService: GraphService) { }


   //Declaro que la gráfica será de tipo 'bar' => barras
   public barChartType: ChartType = 'bar';


   //Inicializo los datos con un arreglo vacio para pasarle los datos más adelante
   public barChartData: ChartData<'bar'> = {
     labels: [],
     datasets: []
   };

   
  //Opciones del las gráficas de barras
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    borderColor:'blue',
    scales: {
      x: {},
      y: {
        min: 0
      }
    },  
  };


  ngOnInit(): void {

    //Cuando se inicia la app llamo a la funcion que me trae todos los teléfonos de la api
    this.graphService.getPhones()
      .subscribe( datas => {
        this.phones = datas.data.phones;

        //Con el bucle for recorro todos los teléfonos para sacar sus nombres y el número de favoritos
        for (let phone of this.phones){

          this.phoneName.push(phone.phone_name);
          this.phoneFavourite.push(phone.favorites);

        }

        //Asigno la información a sus respectivos campos para que se muestre en la gráfica
        this.barChartData = {
          labels: this.phoneName,
          datasets: [
            { data: this.phoneFavourite, label: 'Popularidad', backgroundColor: '#3D86CC'}
          ]

        }
      })
  }

}
