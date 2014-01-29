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

Shop = Screen.extend({
  ctor: function() {
    this._super();

    Shop.instance = this;

    this.m_Background = BackgroundColor.create(cc.c4(255, 252, 232, 255), this);
    this.m_CenterBackground = Entity.create(s_ThirdBackground, this, true);
    this.m_BackButtonBackground = Entity.create(s_MenuSettingsButtonBackground, this);
    this.m_BackButton = Button.create(s_BackButton, 1, 1, this);

    this.m_BackButtonBackground.create().setCenterPosition(Camera.sharedCamera().coord(75), Camera.sharedCamera().coord(75));
    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(70), Camera.sharedCamera().coord(80));

    this.m_BackButton.setTouchHandler('onBackEvent', Shop);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Menu);
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
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

Shop.instance = false;
Shop.sharedScreen = function() {
  return Shop.instance ? Shop.instance : new Shop();
};
