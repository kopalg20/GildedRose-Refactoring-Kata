import { ItemType } from './enum';
import { AgedBrie } from './Items/aged-brie';
import { BackstagePasses } from './Items/backstage-passes';
import { ConjuredItem } from './Items/conjured-item';
import { NormalItem } from './Items/normal-item';

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
  agedBrie: AgedBrie;
  backstagePasses: BackstagePasses;
  conjuredItem: ConjuredItem;
  normalItem: NormalItem;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.agedBrie = new AgedBrie();
    this.backstagePasses = new BackstagePasses();
    this.conjuredItem = new ConjuredItem();
    this.normalItem = new NormalItem();
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const name = this.items[i].name;
      if( name === ItemType.SULFURAS) {
        continue;
      }
      if (name === ItemType.AGED_BRIE) {
        this.agedBrie.update(item);
      } else if (name === ItemType.BACKSTAGE_PASSES) {
        this.backstagePasses.update(item);
      } else if (name.startsWith(ItemType.CONJURED_ITEM_PREFIX)) {
        this.conjuredItem.update(item);
      } else {
        this.normalItem.update(item);
      }
      item.sellIn--;
    }
    return this.items;
  }
}