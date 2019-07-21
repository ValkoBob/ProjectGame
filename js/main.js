var Match3 = Match3 || {};

Match3.game = new Phaser.Game(800, 600, Phaser.AUTO);

Match3.game.state.add('GameState', Match3.GameState);
Match3.game.state.add('HomeState', Match3.HomeState);
Match3.game.state.add('PreloadState', Match3.PreloadState);
Match3.game.state.add('BootState', Match3.BootState);

Match3.game.state.start('BootState');
