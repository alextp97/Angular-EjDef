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

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  phoneName: string[] = [];
  phoneFavourite: number[] = [];
  phones: Phone[] = [];

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };

  public pieChartType: ChartType = 'pie';

  constructor( private graphService: GraphService) { }

  public pieChartData: ChartData<'pie'> = defaultDonutCharData;

  ngOnInit(): void {
    this.graphService.getPhones()
      .subscribe( datas => {
        //console.log(datas)
        this.phones = datas.data.phones;


        for (let phone of this.phones){
          console.log(this.phoneName.push(phone.phone_name));
           
          this.phoneFavourite.push(phone.favorites)
        }

        this.pieChartData.labels!.push(this.phoneName);


        this.pieChartData = {
          labels: this.phoneName,
          datasets: [
            { data: this.phoneFavourite, label: 'Popularidad', backgroundColor: '#39BDE3'}
          ]
        }
      })
  }

}
