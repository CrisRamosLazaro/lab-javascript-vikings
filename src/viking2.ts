// Soldier
class Soldier {

    constructor(public health: number, public strength: number) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage: number) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(public name: string, public health: number, public strength: number) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage: number): string {
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(): string {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage: number) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

interface SoldierSelection {
    saxon: Saxon
    saxonIndex: number
    viking: Viking
    vikingIndex: number
}

// War
class War {

    vikingArmy: Viking[]
    saxonArmy: Saxon[]

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking: Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon: Saxon) {
        this.saxonArmy.push(Saxon)
    }

    soldierSelector(): SoldierSelection {

        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const saxon = this.saxonArmy[saxonIndex]

        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const viking = this.vikingArmy[vikingIndex]

        return { saxon, saxonIndex, viking, vikingIndex }
    }

    vikingAttack(): string {

        const soldiers = this.soldierSelector()

        const attack = soldiers.saxon.receiveDamage(soldiers.viking.strength)

        if (soldiers.saxon.health <= 0) {
            this.saxonArmy.splice(soldiers.saxonIndex, 1)
        }

        return attack
    }

    saxonAttack(): string {

        const soldiers = this.soldierSelector()

        const attack = soldiers.viking.receiveDamage(soldiers.saxon.strength)

        if (soldiers.viking.health <= 0) {
            this.vikingArmy.splice(soldiers.vikingIndex, 1)
        }

        return attack
    }

    showStatus() {

        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
}