import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor() {
  }

  ngOnInit() {
    const unselected = localStorage.getItem('unselectedProviders');
    const selected = localStorage.getItem('selectedProviders');

    if (unselected) {
      this.unselectedProviders = JSON.parse(unselected);
    }
    if (selected) {
      this.selectedProviders = JSON.parse(selected);
    }
  }

  /**
   * un selects a card, adding it back to unselected providers.
   */
  unSelectCard(providerCard) {
    if (providerCard) {
      this.unselectedProviders.push(providerCard);
      this.selectedProviders = this.selectedProviders.filter(p => p.id !== providerCard.id);

      localStorage.setItem('unselectedProviders', JSON.stringify(this.unselectedProviders));
      localStorage.setItem('selectedProviders', JSON.stringify(this.selectedProviders));
    }
  }

  /**
   * selects a card, adding it back to selected providers.
   */
  selectCard(providerCard) {
    if (providerCard) {
      this.selectedProviders.push(providerCard);
      this.unselectedProviders = this.unselectedProviders.filter(p => p.id !== providerCard.id);
      localStorage.setItem('unselectedProviders', JSON.stringify(this.unselectedProviders));
      localStorage.setItem('selectedProviders', JSON.stringify(this.selectedProviders));
    }
  }

}
