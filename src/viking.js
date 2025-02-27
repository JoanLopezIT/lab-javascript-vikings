// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health;
        this.strength = strength;
 }
 attack(){
    return this.strength
 }
 receiveDamage(damage){
     this.health =  this.health - damage
 }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health =  this.health - damage
        if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }
        else if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
   }

// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super(health,strength);
    }
    receiveDamage(damage){
        this.health =  this.health - damage
        if(this.health <= 0){
            return `A Saxon has died in combat`
        }
        else if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
    }
   }
// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vUnit){
       this.vikingArmy.push(vUnit);
    }
    addSaxon(sUnit){
        this.saxonArmy.push(sUnit);
     }
     showStatus(){
        showStatus() {
            if (this.vikingArmy.length <= 0) {
                return  "Saxons have fought for their lives and survived another day..."
            }
            else if (this.saxonArmy.length <= 0) {
                return "Vikings have won the war of the century!"
            }
            else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
                return "Vikings and Saxons are still in the thick of battle."
            }
        }

     }
   }
