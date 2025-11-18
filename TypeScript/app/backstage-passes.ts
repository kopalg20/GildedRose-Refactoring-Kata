import { UpdateClass } from './update-class';
import { Item } from './gilded-rose';

export class BackstagePasses extends UpdateClass {
  UPPER_THRESHOLD_1 = 10;
  UPPER_THRESHOLD_2 = 5;
  update(item: Item): void {
    if (item.sellIn <= this.THRESHOLD_SELLIN) {
      item.quality = 0;
    } else if (item.sellIn <= this.UPPER_THRESHOLD_2) {
      this.increaseQuality(item, 3);
    } else if (item.sellIn <= this.UPPER_THRESHOLD_1) {
      this.increaseQuality(item, 2);
    } else {
      this.increaseQuality(item, this.QUALITY_INCREASE_RATE);
    }
  }
}
