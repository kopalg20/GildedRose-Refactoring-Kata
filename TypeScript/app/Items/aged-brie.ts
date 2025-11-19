import { UpdateClass } from '../update-class';
import { Item } from '../gilded-rose';

export class AgedBrie extends UpdateClass {
  update(item: Item): void {
    if(item.sellIn <= this.THRESHOLD_SELLIN) {
        this.increaseQuality(item, this.QUALITY_INCREASE_RATE*2);
    }else {
        this.increaseQuality(item, this.QUALITY_INCREASE_RATE);
    }
  }
}
