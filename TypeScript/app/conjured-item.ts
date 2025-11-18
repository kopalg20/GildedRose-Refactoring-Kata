import { UpdateClass } from './update-class';
import { Item } from './gilded-rose';

export class ConjuredItem extends UpdateClass {
  update(item: Item): void {
    this.decreaseQuality(item, 2);
    this.decreaseSellIn(item, 1);
    if (item.sellIn < 0) {
      this.decreaseQuality(item, 2);
    }
  }
}
