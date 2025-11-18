import { Item } from './gilded-rose';
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const LEGENDARY_QUALITY = 80;

export class UpdateClass{

    increaseQuality(item: Item,amount: number){ 
        item.quality = Math.min(MAX_QUALITY,item.quality + amount);
    }

    decreaseQuality(item: Item,amount: number){ 
        item.quality = Math.max(MIN_QUALITY,item.quality - amount);
    }

    decreaseSellIn(item: Item,amount: number){ 
        item.sellIn -= amount;
    }

}