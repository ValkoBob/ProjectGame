var Match3 = Match3 || {};

Match3.PreloadState = {
  preload: function () {
    this.donut = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'donut');
    this.donut.anchor.setTo(0.5);
    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.setTo(0.5);
    this.textInfo = this.game.add.text(this.game.world.centerX, this.game.world.height, '2019 © ValkoBob',
        {
          font: "2vh Arial",
          fill: "white",
          align: "center"
        });
    this.textInfo.anchor.setTo(0.5, 1.5);

    this.load.image('background', 'assets/images/backgrounds/background.jpg');
    this.load.image('buttonForPlay', 'assets/images/btn-play.png');
    this.load.image('gem1', 'assets/images/game/gem-01.png');
    this.load.image('gem2', 'assets/images/game/gem-02.png');
    this.load.image('gem3', 'assets/images/game/gem-03.png');
    this.load.image('gem4', 'assets/images/game/gem-04.png');
    this.load.image('gem5', 'assets/images/game/gem-05.png');
    this.load.image('gem6', 'assets/images/game/gem-06.png');
    this.load.image('colorGem', 'assets/images/game/gem-07.png');
    this.load.image('everySideGem', 'assets/images/game/gem-08.png');
    this.load.image('topDownGem', 'assets/images/game/gem-09.png');
    this.load.image('leftRightGem', 'assets/images/game/gem-10.png');
    this.load.image('timeGem', 'assets/images/game/gem-11.png');
    this.load.image('doubleGem', 'assets/images/game/gem-12.png');
    this.load.image('hand', 'assets/images/game/hand.png');
    this.load.image('score', 'assets/images/bg-score.png');
    this.load.image('sound', 'assets/images/btn-sfx.png');
    this.load.image('time-up', 'assets/images/text-timeup.png');

    //tutorial image
    this.load.image('screen3', 'assets/images/tutorial/Scr_3.png');

    this.load.audio('backgroundMusic', ['assets/audio/background.mp3']);
    this.load.audio('kill', ['assets/audio/kill.mp3']);
    this.load.audio('select', ['assets/audio/select-5.mp3']);
  },

  create: function () {
    this.state.start('HomeState');
  }
};