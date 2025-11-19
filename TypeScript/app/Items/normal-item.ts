import { UpdateClass } from '../update-class';
import { Item } from '../gilded-rose';

export class NormalItem extends UpdateClass {
  update(item: Item): void {
    if(item.sellIn <= this.THRESHOLD_SELLIN) {
        this.decreaseQuality(item, this.QUALITY_DECREASE_RATE*2);
    }else {
        this.decreaseQuality(item, this.QUALITY_DECREASE_RATE);
    }
  }
}
