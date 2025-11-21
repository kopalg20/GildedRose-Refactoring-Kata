import { AgedBrie } from "./Items/aged-brie";
import { BackstagePasses } from "./Items/backstage-passes";
import { ConjuredItem } from "./Items/conjured-item";
import { NormalItem } from "./Items/normal-item";
import { ItemType } from "./enum";

export class ItemFactory {
    create(name: string){
        if(name == ItemType.SULFURAS){
            return null;
        }
        else if(name == ItemType.AGED_BRIE){
            return new AgedBrie();
        }else if(name == ItemType.BACKSTAGE_PASSES){
            return new BackstagePasses();
        }else if(name.startsWith(ItemType.CONJURED_ITEM_PREFIX)){
            return new ConjuredItem();
        }else{
            return new NormalItem();
        }
    }
}