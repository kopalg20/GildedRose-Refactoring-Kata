import { UpdateClass } from './update-class';
import { Item } from './gilded-rose';

export class AgedBrie extends UpdateClass {
  update(item: Item): void {
    this.increaseQuality(item, 1);
    this.decreaseSellIn(item, 1);
    if (item.sellIn < 0) {
      this.increaseQuality(item, 1);
    }
  }
}
