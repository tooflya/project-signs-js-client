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

ExitMenu = ExtendedPopup.extend({
  m_Action: false,
  ctor: function(parent) {
    this._super(parent);

    ExitMenu.instance = this;

    this.m_Background = Entity.create(s_PopupBackground, this, true);

    this.m_Text = Entity.create(s_QuitMenuText, this);

    this.m_YesButtonBackground = Entity.create(s_GameButtonsBackground, this);
    this.m_NoButtonBackground = Entity.create(s_GameButtonsBackground, this);

    this.m_YesButton = Button.create(s_YesButton, 1, 1, this.m_YesButtonBackground);
    this.m_NoButton = Button.create(s_NoButton, 1, 1, this.m_NoButtonBackground);

    this.m_Text.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(70));

    this.m_YesButtonBackground.create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(70), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(90));
    this.m_NoButtonBackground.create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(70), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(90));

    this.m_YesButton.create().setCenterPosition(this.m_YesButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_YesButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_NoButton.create().setCenterPosition(this.m_NoButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_NoButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));

    this.m_YesButton.setTouchHandler("onYesEvent", ExitMenu);
    this.m_NoButton.setTouchHandler('onNoEvent', ExitMenu);
  },
  onYesEvent: function() {
    this.m_Action = true;

    this.hide();
  },
  onNoEvent: function() {
    this.m_Action = false;

    this.hide();
  },
  onBackEvent: function() {
    this.hide();
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();

    if(this.m_Action) {
      ScreenManager.sharedManager().replace(Menu);
    }
  }
});

ExitMenu.create = function(parent) {
  var popup = new ExitMenu(parent);

  return popup;
}

ExitMenu.instance = false;
ExitMenu.sharedScreen = function() {
  return ExitMenu.instance ? ExitMenu.instance : ExitMenu.create();
};
