const MATCH_RESULT = {
  WON: "won",
  LOST: "lost",
  DRAW: "draw",
};

const CHARACTER = {
  PLAYER: "player",
  MONSTER: "monster",
};

const ACTION = {
  ATTACK: "attack",
  HEAL: "heal",
};

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      matchResult: undefined,
      battleLogs: [],
    };
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.matchResult = MATCH_RESULT.DRAW;
      } else if (value <= 0) {
        this.matchResult = MATCH_RESULT.LOST;
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.matchResult = MATCH_RESULT.DRAW;
      } else if (value <= 0) {
        this.matchResult = MATCH_RESULT.WON;
      }
    },
  },

  computed: {
    monsterHealthStyle() {
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthStyle() {
      return { width: `${this.playerHealth}%` };
    },
    canUseSpecialAttack() {
      return this.round % 3 !== 0;
    },
    canUseHeal() {
      return this.playerHealth < 100;
    },
  },

  methods: {
    isPlayer(who) {
      return who === CHARACTER.PLAYER;
    },
    isMonster(who) {
      return who === CHARACTER.MONSTER;
    },
    isHealAction(what) {
      return what === ACTION.HEAL;
    },
    isAttackAction(what) {
      return what === ACTION.ATTACK;
    },

    getActionMaGer(who) {
      if (this.isPlayer(who)) {
        return "Player";
      } else if (this.isMonster(who)) {
        return "Monster";
      }
      return "";
    },

    getActionDescription(what) {
      if (this.isHealAction(what)) {
        return " heals himself for k";
      } else if (this.isAttackAction(what)) {
        return " attacks and deals ";
      }
      return "";
    },

    attackMonster() {
      this.round += 1;

      const attackValue = getRandomNumber(5, 12);
      this.addBattleLog(CHARACTER.PLAYER, ACTION.ATTACK, attackValue);
      if (attackValue > this.monsterHealth) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
        this.attackPlayer();
      }
    },
    attackPlayer() {
      const attackValue = getRandomNumber(8, 15);
      this.addBattleLog(CHARACTER.MONSTER, ACTION.ATTACK, attackValue);
      if (attackValue > this.playerHealth) {
        this.playerHealth = 0;
      } else {
        this.playerHealth -= attackValue;
      }
    },
    specialAttackMonster() {
      this.round += 1;

      const attackValue = getRandomNumber(15, 25);
      this.addBattleLog(CHARACTER.PLAYER, ACTION.ATTACK, attackValue);
      if (attackValue > this.monsterHealth) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
        this.attackPlayer();
      }
    },
    healPlayer() {
      this.round += 1;

      const healValue = getRandomNumber(15, 20);
      this.addBattleLog(CHARACTER.PLAYER, ACTION.HEAL, healValue);

      const newHealth = this.playerHealth + healValue;

      this.playerHealth = newHealth > 100 ? 100 : newHealth;
      this.attackPlayer();
    },
    playerSurrender() {
      this.playerHealth = 0;
      this.matchResult = MATCH_RESULT.LOST;
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 0;
      this.matchResult = undefined;
      this.battleLogs = [];
    },
    addBattleLog(who, what, value) {
      this.battleLogs.unshift({
        who,
        what,
        value,
      });
    },
  },
});

app.mount("#game");
