import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-dash',
  templateUrl: './shopping-dash.component.html',
  styleUrls: ['./shopping-dash.component.css']
})
export class ShoppingDashComponent implements OnInit {

  private beerList = [
    {
      productName: 'Corona Extra',
      productInfo: "Corona is a premium beer, classic and authentic, recognized worldwide for its high quality, and refreshing taste. Serve with a lime wedge for an unparalleled flavour of relaxation.",
    },
    {
      productName: 'Heineken',
      productInfo: "Brewed in Holland according to the original recipe, Heineken's distinctive flavour offers a refreshing European taste that has made it a favourite all over the world.",
    },
    {
      productName: 'Busch Lager',
      productInfo: "First introduced in 1955, Busch is brewed, fermented and aged to create a smooth, refreshing taste at 4.7% alcohol by volume. Busch is an American-style lager, brewed in Canada with the Anheuser-Busch tradition of excellence.",
    },
    {
      productName: 'Alexander Keiths Ipa',
      productInfo: "Brewed in Halifax since 1820, India Pale Ale is light in colour and hopped in flavour. Only the lightest and finest barleys that produce a pale malt are used while the amounts of hops are increased so as to give a pronounced hop flavour.",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
