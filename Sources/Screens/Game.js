/**
 * Tooflya Inc. Development
 *
 * @author Igor Mats from Tooflya Inc.
 * @copyright (c) 2013 by Igor Mats
 * http://www.tooflya.com/development/
 *
 * License: Attribution NonCommercial NoDerivatives 4.0 International
 *
 * Creative Commons Corporation (“Creative Commons”) is not a law firm and does
 * not provide legal services or legal advice. Distribution of Creative Commons
 * public licenses does not create a lawyer-client or other relationship.
 * Creative Commons makes its licenses and related information available on
 * an “as-is” basis. Creative Commons gives no warranties regarding its licenses,
 * any material licensed under their terms and conditions, or any related
 * information. Creative Commons disclaims all liability for damages resulting
 * from their use to the fullest extent possible.
 *
 * Creative Commons public licenses provide a standard set of terms and
 * conditions that creators and other rights holders may use to share original
 * works of authorship and other material subject to copyright and certain other
 * rights specified in the public license below. The following considerations
 * are for informational purposes only, are not exhaustive, and do not form part
 * of our licenses.
 *
 * Creative Commons may be contacted at creativecommons.org.
 *
 * @version of cocos2d-x is 2.1.4
 *
 */

Game = Screen.extend({
  ctor: function() {
    this._super();

    Game.instance = this;

    this.m_PausePopup = Pause.create(this);
    this.m_ExitPopup = ExitMenu.create(this);
    this.m_RestartPopup = Restart.create(this);

    this.m_Background = Entity.create(s_MenuBackground, this, true);
    this.m_TableBackground = Entity.create(s_GameTableBackground, this, true);
    this.m_GamePanel1 = Entity.create(s_GamePanel, this);
    this.m_GamePanel2 = Entity.create(s_GamePanel, this);
    this.m_ScoreTextKey = Entity.create(s_GameScoreText, this);

    this.m_RollButtonBackground = Entity.create(s_GameButtonsBackground, this);
    this.m_ShopButtonBackground = Entity.create(s_GameButtonsBackground, this);
    this.m_AchievementsButtonBackground = Entity.create(s_GameButtonsBackground, this);
    this.m_MenuButtonBackground = Entity.create(s_GameButtonsBackground, this);
    this.m_PauseButtonBackground = Entity.create(s_GameButtonsBackground, this);
    this.m_RestartButtonBackground = Entity.create(s_GameButtonsBackground, this);

    this.m_RollButton = Button.create(s_GameRollButton, 1, 1, this.m_RollButtonBackground);
    this.m_ShopButton = Button.create(s_GameShopButton, 1, 1, this.m_ShopButtonBackground);
    this.m_AchievementsButton = Button.create(s_GameAchievementsButton, 1, 1, this.m_AchievementsButtonBackground);
    this.m_MenuButton = Button.create(s_GameMenuButton, 1, 1, this.m_MenuButtonBackground);
    this.m_PauseButton = Button.create(s_GamePauseButton, 1, 1, this.m_PauseButtonBackground);
    this.m_RestartButton = Button.create(s_GameRestartButton, 1, 1, this.m_RestartButtonBackground);

    this.m_TableBackground.setCenterPosition(this.m_TableBackground.getCenterX(), this.m_TableBackground.getCenterY() - Camera.sharedCamera().coord(20));
    this.m_GamePanel1.create().setCenterPosition(this.m_GamePanel1.getWidth() / 2, Camera.sharedCamera().center.y);
    this.m_GamePanel2.create().setCenterPosition(Camera.sharedCamera().width - this.m_GamePanel2.getWidth() / 2, Camera.sharedCamera().center.y);
    this.m_ScoreTextKey.create().setCenterPosition(Camera.sharedCamera().coord(240), Camera.sharedCamera().height - Camera.sharedCamera().coord(35));

    this.m_RollButtonBackground.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(55), Camera.sharedCamera().center.y);
    this.m_ShopButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(60), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(260));
    this.m_AchievementsButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(60), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(130));
    this.m_MenuButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(60), Camera.sharedCamera().center.y);
    this.m_PauseButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(60), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(130));
    this.m_RestartButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(60), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(260));

    this.m_RollButton.create().setCenterPosition(this.m_RollButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_RollButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_ShopButton.create().setCenterPosition(this.m_ShopButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_ShopButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_AchievementsButton.create().setCenterPosition(this.m_AchievementsButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_AchievementsButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_MenuButton.create().setCenterPosition(this.m_MenuButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_MenuButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_PauseButton.create().setCenterPosition(this.m_PauseButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_PauseButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_RestartButton.create().setCenterPosition(this.m_RestartButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_RestartButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));

    this.m_GamePanel1.setScaleX(1);
    this.m_GamePanel2.setScaleX(-1);

    this.m_RollButton.setTouchHandler('onRollEvent', Game);
    this.m_ShopButton.setTouchHandler('onShopEvent', Game);
    this.m_AchievementsButton.setTouchHandler('onAchievementsEvent', Game);
    this.m_MenuButton.setTouchHandler('onMenuEvent', Game);
    this.m_PauseButton.setTouchHandler('onPauseEvent', Game);
    this.m_RestartButton.setTouchHandler('onRestartEvent', Game);
  },
  onRollEvent: function() {

  },
  onShopEvent: function() {
    this.m_PausePopup.show();
  },
  onAchievementsEvent: function() {
    this.m_PausePopup.show();
  },
  onMenuEvent: function() {
    this.m_ExitPopup.show();
  },
  onPauseEvent: function() {
    this.m_PausePopup.show();
  },
  onRestartEvent: function() {
    this.m_RestartPopup.show();
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
      if(this.m_PausePopup.getParent()) {
        this.m_PausePopup.hide();
      } else if(this.m_ExitPopup.getParent()) {
        this.m_ExitPopup.hide();
      } else if(!this.m_RestartPopup.getParent()) {
          this.m_PausePopup.show();
        }
      break;
    }
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  }
});

Game.instance = false;
Game.sharedScreen = function() {
  return Game.instance ? Game.instance : new Game();
};
