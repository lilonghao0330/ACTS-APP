import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import { StatsPieChart } from '../../data/data';


@Component({
  selector: 'page-piechart',
  templateUrl: 'piechart.html',
})
export class PiechartPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  margin = {top: 20, right: 0, bottom: 30, left: 0};
  width: number;
  height: number;
  radius: number;

  arc: any;
  labelArc: any;
  labelPer: any;
  pie: any;
  color: any;
  svg: any;
  pieChartData: Array<Object>;
  covertedPieChartData: Array<Object>;
  

  constructor(public navCtrl: NavController) {
    this.width = 1200 - this.margin.left - this.margin.right ;
    this.height = 600 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
    this.pieChartData = StatsPieChart;
  }
  
  ionViewDidEnter() {
    this.initSvg();
    this.covertData(this.pieChartData);
    this.drawPieChart(this.covertedPieChartData);
    this.showPieCharData(this.pieChartData);
  }

  initSvg(){
    this.color = d3Scale.scaleOrdinal()
        .range(["#FFA500", "#00FF00", "#FF0000", "#6b486b", "#FF00FF", "#d0743c", "#00FA9A"]);
    this.arc = d3Shape.arc()
        .outerRadius(this.radius - 100)
        .innerRadius(0);
    this.labelArc = d3Shape.arc()
        .outerRadius(this.radius - 80)
        .innerRadius(this.radius - 80);
    
    this.labelPer = d3Shape.arc()
        .outerRadius(this.radius - 140)
        .innerRadius(this.radius - 140);
    
    this.pie = d3Shape.pie()
        .sort(null)
        .value((d: any) => d.electionP);

    this.svg = d3.select("#pieChart")
        .append("svg")
        .attr("width", '50%')
        .attr("height", '50%')
        .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
        .append("g")
        .attr("transform", "translate(" + Math.min(this.width,this.height) / 2 + "," + Math.min(this.width,this.height) / 2 + ")");
    
    }
    
  drawPieChart(data:Array<any>) {
    let g = this.svg.selectAll(".arc")
        .data(this.pie(data))
        .enter().append("g")
        .attr("class", "arc");
    g.append("path").attr("d", this.arc)
        .style("fill", (d: any) => this.color(d.data.party) );
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
        .attr("dy", ".25em")
        .attr("dx", "-1.5em")
        .text((d: any) => d.data.party);

    g.append("text").attr("transform", (d: any) => "translate(" + this.labelPer.centroid(d) + ")")
        .attr("dy", ".25em")
        .attr("dx", "-1.5em")
        .text((d: any) => d.data.electionP + "%");
  }
  covertData(data:Array<any>){
    var sum = 0;
    for (var i=0; i<data.length; i++){
        sum = sum + data[i].electionP;
    }
    for (var y=0; y<data.length; y++){
        data[y].electionP =Math.round(data[y].electionP/sum*100,2);
        console.log(data[y].electionP);
    }
    this.covertedPieChartData = data;
  }
  showPieCharData(data:Array<any>) {
      for (var i=0; i<data.length; i++){
          console.log(data[i]);
      }
  }
}

