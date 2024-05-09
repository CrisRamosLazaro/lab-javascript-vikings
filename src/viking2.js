var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Soldier
var Soldier = /** @class */ (function () {
    function Soldier(health, strength) {
        this.health = health;
        this.strength = strength;
        this.health = health;
        this.strength = strength;
    }
    Soldier.prototype.attack = function () {
        return this.strength;
    };
    Soldier.prototype.receiveDamage = function (damage) {
        this.health = this.health - damage;
    };
    return Soldier;
}());
// Viking
var Viking = /** @class */ (function (_super) {
    __extends(Viking, _super);
    function Viking(name, health, strength) {
        var _this = _super.call(this, health, strength) || this;
        _this.name = name;
        _this.health = health;
        _this.strength = strength;
        _this.name = name;
        return _this;
    }
    Viking.prototype.receiveDamage = function (damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return "".concat(this.name, " has received ").concat(damage, " points of damage");
        }
        else {
            return "".concat(this.name, " has died in act of combat");
        }
    };
    Viking.prototype.battleCry = function () {
        return "Odin Owns You All!";
    };
    return Viking;
}(Soldier));
// Saxon
var Saxon = /** @class */ (function (_super) {
    __extends(Saxon, _super);
    function Saxon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Saxon.prototype.receiveDamage = function (damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return "A Saxon has received ".concat(damage, " points of damage");
        }
        else {
            return "A Saxon has died in combat";
        }
    };
    return Saxon;
}(Soldier));
// War
var War = /** @class */ (function () {
    function War() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    War.prototype.addViking = function (Viking) {
        this.vikingArmy.push(Viking);
    };
    War.prototype.addSaxon = function (Saxon) {
        this.saxonArmy.push(Saxon);
    };
    War.prototype.soldierSelector = function () {
        var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        var saxon = this.saxonArmy[saxonIndex];
        var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        var viking = this.vikingArmy[vikingIndex];
        return { saxon: saxon, saxonIndex: saxonIndex, viking: viking, vikingIndex: vikingIndex };
    };
    War.prototype.vikingAttack = function () {
        var soldiers = this.soldierSelector();
        var attack = soldiers.saxon.receiveDamage(soldiers.viking.strength);
        if (soldiers.saxon.health <= 0) {
            this.saxonArmy.splice(soldiers.saxonIndex, 1);
        }
        return attack;
    };
    War.prototype.saxonAttack = function () {
        var soldiers = this.soldierSelector();
        var attack = soldiers.viking.receiveDamage(soldiers.saxon.strength);
        if (soldiers.viking.health <= 0) {
            this.vikingArmy.splice(soldiers.vikingIndex, 1);
        }
        return attack;
    };
    War.prototype.showStatus = function () {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    };
    return War;
}());
