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

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const LEGENDARY_QUALITY = 80;
const AGED_BRIE = 'Aged Brie';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const CONJURED_ITEM_PREFIX = 'Conjured';

function increaseQuality(item: Item) {
    if(item.quality < MAX_QUALITY){
        item.quality = item.quality + 1;
    }
}

function decreaseQuality(item: Item) {
    if(item.quality > MIN_QUALITY){
        item.quality -= 1;
    }
}

function decreaseSellIn(item: Item) {
    item.sellIn -= 1;
}

function updateAgedBrie(item: Item) {
    increaseQuality(item);
    decreaseSellIn(item);
    if(item.sellIn < 0){
        increaseQuality(item);
    }   
}

function updateBackstagePasses(item: Item) {
    increaseQuality(item); 
    if(item.sellIn < 11){
        increaseQuality(item);
    }
    if(item.sellIn < 6){
        increaseQuality(item);
    }   
    decreaseSellIn(item);
    if(item.sellIn < 0){
        item.quality = 0;
    }
}

function updateConjuredItem(item: Item) {
    decreaseQuality(item);
    decreaseQuality(item);
    decreaseSellIn(item);
    if(item.sellIn < 0){
      decreaseQuality(item);
    }
}

function updateNormalItem(item: Item) {
    decreaseQuality(item);
    decreaseSellIn(item);
    if(item.sellIn < 0){
        decreaseQuality(item);
    }
}   

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].name === SULFURAS) continue
      if(this.items[i].name === AGED_BRIE){
        updateAgedBrie(this.items[i]);
        continue
      } 
      if(this.items[i].name === BACKSTAGE_PASSES){
        updateBackstagePasses(this.items[i]);
        continue
      }
      if(this.items[i].name.indexOf(CONJURED_ITEM_PREFIX) === 0){
        updateConjuredItem(this.items[i]);
        continue
      }
      updateNormalItem(this.items[i]);
    }
    return this.items;
  }
}