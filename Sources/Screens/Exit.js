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

Exit = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    Exit.instance = this;

    this.m_Background = Entity.create(s_PopupBackground, this, true);

    this.m_Text = Entity.create(s_QuitText, this.m_Background);

    this.m_YesButtonBackground = Entity.create(s_GameButtonsBackground, this.m_Background);
    this.m_NoButtonBackground = Entity.create(s_GameButtonsBackground, this.m_Background);

    this.m_YesButton = Button.create(s_YesButton, 1, 1, this.m_YesButtonBackground);
    this.m_NoButton = Button.create(s_NoButton, 1, 1, this.m_NoButtonBackground);

    this.m_Text.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(70));

    this.m_YesButtonBackground.create().setCenterPosition(this.m_Background.getWidth() / 2 - Camera.sharedCamera().coord(70), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(90));
    this.m_NoButtonBackground.create().setCenterPosition(this.m_Background.getWidth() / 2 + Camera.sharedCamera().coord(70), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(90));

    this.m_YesButton.create().setCenterPosition(this.m_YesButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_YesButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_NoButton.create().setCenterPosition(this.m_NoButtonBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_NoButtonBackground.getHeight() / 2 + Camera.sharedCamera().coord(5));

    this.m_YesButton.setTouchHandler("onYesEvent", Exit);
    this.m_NoButton.setTouchHandler('onNoEvent', Exit);
  },
  onYesEvent: function() {
    // TODO: Implements exit.
  },
  onNoEvent: function() {
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
  }
});

Exit.create = function(parent) {
  var popup = new Exit(parent);

  return popup;
}

Exit.instance = false;
Exit.sharedScreen = function() {
  return Exit.instance ? Exit.instance : new Exit();
};
