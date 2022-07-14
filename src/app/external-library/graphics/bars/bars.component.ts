import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { defaultBarCharData } from './defaultBarCharData';
import { Phone } from '../../interfaces/mobile.interface';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  phoneName: string[] = [];
  phoneFavourite: number[] = [];
  phones: Phone[] = [];

  constructor(private graphService: GraphService) { }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    borderColor:'blue',
    scales: {
      x: {
      
      },
      y: {
        min: 0
      }
    },
    
  };

  public barChartData: ChartData<'bar'> = defaultBarCharData;

  ngOnInit(): void {
    this.graphService.getPhones()
      .subscribe( datas => {
        //console.log(datas)
        this.phones = datas.data.phones;


        for (let phone of this.phones){
          console.log(this.phoneName.push(phone.phone_name));
           
          this.phoneFavourite.push(phone.favorites)
        }

        this.barChartData.labels!.push(this.phoneName);


        this.barChartData = {
          labels: this.phoneName,
          datasets: [
            { data: this.phoneFavourite, label: 'Popularidad', backgroundColor: '#3D86CC'}
          ]
        }
      })
  }

}