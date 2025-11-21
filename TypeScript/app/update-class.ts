import { Item } from './gilded-rose';

export class UpdateClass{
    MAX_QUALITY = 50;
    MIN_QUALITY = 0;
    QUALITY_INCREASE_RATE = 1;
    QUALITY_DECREASE_RATE = 1;
    THRESHOLD_SELLIN = 0;

    increaseQuality(item: Item,amount: number){ 
        item.quality = Math.min(this.MAX_QUALITY,item.quality + amount);
    }

    decreaseQuality(item: Item,amount: number){ 
        item.quality = Math.max(this.MIN_QUALITY,item.quality - amount);
    }
}