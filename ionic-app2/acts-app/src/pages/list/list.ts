import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatsPieChart } from '../../data/data';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = StatsPieChart;  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
}
}
