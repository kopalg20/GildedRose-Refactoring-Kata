import { ItemFactory } from './item-factory';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const name = this.items[i].name;
      const factory = new ItemFactory();
      const updater = factory.create(name);
      if(updater == null) continue;
      updater.update(item);
      item.sellIn--;
    }
    return this.items;
  }
}