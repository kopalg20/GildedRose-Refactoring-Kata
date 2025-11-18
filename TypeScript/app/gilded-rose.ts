import { ItemType } from './enum';
import { AgedBrie } from './aged-brie';
import { BackstagePasses } from './backstage-passes';
import { ConjuredItem } from './conjured-item';
import { NormalItem } from './normal-item';
import { Sulfuras } from './sulfuras';

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

  sulfuras: Sulfuras;
  agedBrie: AgedBrie;
  backstagePasses: BackstagePasses;
  conjuredItem: ConjuredItem;
  normalItem: NormalItem;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.sulfuras = new Sulfuras();
    this.agedBrie = new AgedBrie();
    this.backstagePasses = new BackstagePasses();
    this.conjuredItem = new ConjuredItem();
    this.normalItem = new NormalItem();
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const name = this.items[i].name;
      switch (true) {
        case name === ItemType.SULFURAS:
          this.sulfuras.update(this.items[i]);
          break;
        case name === ItemType.AGED_BRIE:
          this.agedBrie.update(this.items[i]);
          break;
        case name === ItemType.BACKSTAGE_PASSES:
          this.backstagePasses.update(this.items[i]);
          break;
        case name.indexOf(ItemType.CONJURED_ITEM_PREFIX) === 0:
          this.conjuredItem.update(this.items[i]);
          break;
        default:
          this.normalItem.update(this.items[i]);
      }
    }
    return this.items;
  }
}