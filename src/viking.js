// Soldier
class Soldier {
    constructor(healthlevel, strengthlevel) {
        this.health = healthlevel
        this.strength = strengthlevel
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage

    }
}




// Viking
class Viking extends Soldier {
    constructor(playerName, healthlevel, strengthlevel) {
        super(healthlevel, strengthlevel)
        this.name = playerName
    }
    receiveDamage(damage) {
        this.health -= damage
    }
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`

    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }


    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const saxonLife = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {

            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
        }

        return saxonLife;

    }

    saxonAttack() {

        Viking.receiveDamage() === Saxon.strength

    }
    showStatus() { }
}