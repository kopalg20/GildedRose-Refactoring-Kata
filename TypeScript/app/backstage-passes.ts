import { UpdateClass } from './update-class';
import { Item } from './gilded-rose';

export class BackstagePasses extends UpdateClass {
  update(item: Item): void {
    this.increaseQuality(item, 1);
    if (item.sellIn < 11) {
      this.increaseQuality(item, 1);
    }
    if (item.sellIn < 6) {
      this.increaseQuality(item, 1);
    }
    this.decreaseSellIn(item, 1);
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
}
