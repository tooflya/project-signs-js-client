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

Difficult = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    Difficult.instance = this;

    this.m_Background = Entity.create(s_PopupBackground, this, true);

    this.m_BackButtonBackground = Entity.create(s_MenuSettingsButtonBackground, this);
    this.m_BackButton = Button.create(s_BackButton, 1, 1, this);
    this.m_EasyButton = Button.create(s_MenuEasyButon, 1, 1, this);
    this.m_NormalButton = Button.create(s_MenuNormalButon, 1, 1, this);
    this.m_HardButton = Button.create(s_MenuHardButon, 1, 1, this);

    this.m_BackButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(75), Camera.sharedCamera().coord(75));
    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(70), Camera.sharedCamera().coord(80));
    this.m_EasyButton.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(100));
    this.m_NormalButton.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
    this.m_HardButton.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(100));

    this.m_BackButton.setTouchHandler('onBackEvent', Difficult);
    this.m_EasyButton.setTouchHandler('onGameEvent', Difficult);
    this.m_NormalButton.setTouchHandler('onGameEvent', Difficult);
    this.m_HardButton.setTouchHandler('onGameEvent', Difficult);
  },
  onBackEvent: function() {
    this.hide();
  },
  onGameEvent: function() {
    ScreenManager.sharedManager().replace(Game);
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  }
});

Difficult.create = function(parent) {
  var popup = new Difficult(parent);

  return popup;
}

Difficult.instance = false;
Difficult.sharedScreen = function() {
  return Difficult.instance ? Difficult.instance : new Difficult();
};
