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

Menu = Screen.extend({
  m_SettingsShowed: false,
  m_CreditsShowed: false,
  ctor: function() {
    this._super();

    Menu.instance = this;

    this.m_DifficultPopup = Difficult.create(this);
    this.m_ExitPopup = Exit.create(this);

    this.m_Background = Entity.create(s_MenuBackground, this, true);
    this.m_TopBackground = Entity.create(s_MenuTopBackground, this, true);

    this.m_ControlsLayer = Background.create(this);
    this.m_CreditsLayer = Background.create(this);
    this.m_NameLayer = Background.create(this);

    this.m_AchievementsButton = Button.create(s_MenuAchievementsButton, 1, 1, this.m_ControlsLayer);
    this.m_ShopButton = Button.create(s_MenuShopButton, 1, 1, this.m_ControlsLayer);

    this.m_MusicButtonBackground = Entity.create(s_MenuMusicButtonBackground, this.m_ControlsLayer);
    this.m_SoundButtonBackground = Entity.create(s_MenuSoundButtonBackground, this.m_ControlsLayer);
    this.m_CreditsButtonBackground = Entity.create(s_MenuCreditsButtonBackground, this.m_ControlsLayer);
    this.m_BestScoreBackground = Entity.create(s_MenuBestScoreBackground, this.m_ControlsLayer);
    this.m_MainButtonsBackground = Entity.create(s_MenuMainButtonsBackground, this.m_ControlsLayer, true);
    this.m_SettingsButtonBackground = Entity.create(s_MenuSettingsButtonBackground, this.m_ControlsLayer);
    this.m_SocialButtonsBackground = Entity.create(s_MenuSocialButtonsBackground, this.m_ControlsLayer);

    this.m_MusicButton = Button.create(s_MenuMusicButton, 1, 2, this.m_MusicButtonBackground);
    this.m_SoundButton = Button.create(s_MenuSoundButton, 1, 2, this.m_SoundButtonBackground);
    this.m_CreditsButton = Button.create(s_MenuCreditsButton, 1, 1, this.m_CreditsButtonBackground);
    this.m_PlayButton = Button.create(s_MenuPlayButton, 1, 1, this.m_ControlsLayer);
    this.m_SettingsButton = Button.create(s_MenuSettingsButton, 1, 1, this.m_ControlsLayer);
    this.m_MoreGamesButton = Button.create(s_MenuMoreGamesButton, 1, 1, this.m_ControlsLayer);
    this.m_FacebookButton = Button.create(s_MenuFacebookButton, 1, 1, this.m_ControlsLayer);
    this.m_TwitterButton = Button.create(s_MenuTwitterButton, 1, 1, this.m_ControlsLayer);

    this.m_BestScoreBackground.create().setCenterPosition(this.m_BestScoreBackground.getWidth() / 2, Camera.sharedCamera().center.y);
    this.m_SettingsButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(80), Camera.sharedCamera().coord(72));
    this.m_SocialButtonsBackground.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(180), Camera.sharedCamera().coord(72));
    this.m_MusicButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(78), Camera.sharedCamera().coord(70));
    this.m_SoundButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(78), Camera.sharedCamera().coord(70));
    this.m_CreditsButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(78), Camera.sharedCamera().coord(70));

    this.m_PlayButton.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
    this.m_SettingsButton.create().setCenterPosition(Camera.sharedCamera().coord(75), Camera.sharedCamera().coord(75));
    this.m_MoreGamesButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(290), Camera.sharedCamera().coord(72));
    this.m_FacebookButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(185), Camera.sharedCamera().coord(72));
    this.m_TwitterButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(80), Camera.sharedCamera().coord(72));
    this.m_AchievementsButton.create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(130), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(72));
    this.m_ShopButton.create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(130), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(72));
    this.m_MusicButton.create().setCenterPosition(this.m_MusicButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_MusicButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_SoundButton.create().setCenterPosition(this.m_SoundButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_SoundButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_CreditsButton.create().setCenterPosition(this.m_CreditsButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_CreditsButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));

    this.m_PlayButton.setTouchHandler('onPlayEvent', Menu);
    this.m_SettingsButton.setTouchHandler('onSettingsEvent', Menu);
    this.m_MoreGamesButton.setTouchHandler('onMoreGamesEvent', Menu);
    this.m_FacebookButton.setTouchHandler('onFacebookEvent', Menu);
    this.m_TwitterButton.setTouchHandler('onTwitterEvent', Menu);
    this.m_AchievementsButton.setTouchHandler('onAchievementsEvent', Menu);
    this.m_ShopButton.setTouchHandler('onShopEvent', Menu);
    this.m_MusicButton.setTouchHandler('onMusicEvent', Menu);
    this.m_SoundButton.setTouchHandler("onSoundEvent", Menu);
    this.m_CreditsButton.setTouchHandler('onCreditsEvent', Menu);

    this.m_CreditsLayer.setPosition(cc.p(0, -Camera.sharedCamera().height));

    this.m_CreditsBackButtonBackground = Entity.create(s_MenuSettingsButtonBackground, this.m_CreditsLayer);
    this.m_CreditsBackButton = Button.create(s_BackButton, 1, 1, this.m_CreditsLayer);

    this.m_CreditsBackButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(75), Camera.sharedCamera().coord(75));
    this.m_CreditsBackButton.create().setCenterPosition(Camera.sharedCamera().coord(70), Camera.sharedCamera().coord(80));

    this.m_CreditsBackButton.setTouchHandler('onCreditsEvent', Menu);

    this.m_LettersBackgrounds1 = Entity.create(s_MenuLettersBackgrounds1, this.m_NameLayer);
    this.m_LettersBackgrounds2 = Entity.create(s_MenuLettersBackgrounds2, this.m_NameLayer);
    this.m_LettersBackgrounds3 = Entity.create(s_MenuLettersBackgrounds3, this.m_NameLayer);
    this.m_LettersBackgrounds4 = Entity.create(s_MenuLettersBackgrounds4, this.m_NameLayer);
    this.m_LettersBackgrounds5 = Entity.create(s_MenuLettersBackgrounds5, this.m_NameLayer);

    this.m_LettersBackgrounds1.create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(200), Camera.sharedCamera().height - Camera.sharedCamera().coord(140));
    this.m_LettersBackgrounds2.create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(100), Camera.sharedCamera().height - Camera.sharedCamera().coord(110));
    this.m_LettersBackgrounds3.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().coord(100));
    this.m_LettersBackgrounds4.create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(100), Camera.sharedCamera().height - Camera.sharedCamera().coord(110));
    this.m_LettersBackgrounds5.create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(200), Camera.sharedCamera().height - Camera.sharedCamera().coord(140));
  },
  onPlayEvent: function() {
    this.m_DifficultPopup.show();
  },
  onSettingsEvent: function() {
    if(this.m_MusicButtonBackground.getNumberOfRunningActions() > 0) return;

    var time = 0.4;
    var x = Camera.sharedCamera().coord(78);
    var y = Camera.sharedCamera().coord(70);

    if(this.m_SettingsShowed) {
      this.m_SettingsButton.runAction(false, {name: 'rotate', time: time, value: -720});

      this.m_MusicButtonBackground.runAction(false, {name: 'move', time: time, x: x, y: y});
      this.m_SoundButtonBackground.runAction(false, {name: 'move', time: time, x: x, y: y});
      this.m_CreditsButtonBackground.runAction(false, {name: 'move', time: time, x: x, y: y});
    } else {
      this.m_SettingsButton.runAction(false, {name: 'rotate', time: time, value: 720});

      this.m_MusicButtonBackground.runAction(false, {name: 'move', time: time, x: Camera.sharedCamera().coord(220), y: y});
      this.m_SoundButtonBackground.runAction(false, {name: 'move', time: time, x: Camera.sharedCamera().coord(340), y: y});
      this.m_CreditsButtonBackground.runAction(false, {name: 'move', time: time, x: Camera.sharedCamera().coord(460), y: y});
    }

    this.m_SettingsShowed = !this.m_SettingsShowed;
  },
  onAchievementsEvent: function() {
    ScreenManager.sharedManager().replace(Achievements);
  },
  onShopEvent: function() {
    ScreenManager.sharedManager().replace(Shop);
  },
  onMoreGamesEvent: function() {

  },
  onFacebookEvent: function() {

  },
  onTwitterEvent: function() {alert(1);

  },
  onMusicEvent: function() {
    Music.sharedMusic().changeState();

    this.m_MusicButton.setCurrentFrameIndex(Music.sharedMusic().enabled ? 1 : 0);
  },
  onSoundEvent: function() {
    Sound.sharedSound().changeState();

    this.m_SoundButton.setCurrentFrameIndex(Sound.sharedSound().enabled ? 1 : 0);
  },
  onCreditsEvent: function() {
    if(this.m_CreditsLayer.getNumberOfRunningActions() > 0) return;

    if(this.m_CreditsShowed) {
      this.m_TopBackground.runAction(false, {name: 'fade', time: 0.2, value: 255});
      this.m_CreditsLayer.runAction(cc.Sequence.create(
        cc.MoveTo.create(0.2, cc.p(0, Camera.sharedCamera().coord(50))),
        cc.MoveTo.create(0.2, cc.p(0, -Camera.sharedCamera().height))));
      this.m_ControlsLayer.runAction(cc.MoveTo.create(0.4, cc.p(0, 0)));
    } else {
      this.m_TopBackground.runAction(false, {name: 'fade', time: 0.2, value: 0});
      this.m_CreditsLayer.runAction(cc.MoveTo.create(0.4, cc.p(0, 0)));
      this.m_ControlsLayer.runAction(cc.Sequence.create(
        cc.MoveTo.create(0.2, cc.p(0, Camera.sharedCamera().coord(50))),
        cc.MoveTo.create(0.2, cc.p(0, -Camera.sharedCamera().height))));
    }

    this.m_CreditsShowed = !this.m_CreditsShowed;
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
        if(this.m_DifficultPopup.getParent()) {
          this.m_DifficultPopup.hide();
        } else if(this.m_ExitPopup.getParent()) {
          this.m_ExitPopup.hide();
        } else {
          this.m_ExitPopup.show();
        }
      break;
    }
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  onEnterTransitionDidFinish: function() {
    this._super();

    if(!this.m_SettingsShowed) {
      this.onSettingsEvent();
    }
  }
});

Menu.instance = false;
Menu.sharedScreen = function() {
  return Menu.instance ? Menu.instance : new Menu();
};
