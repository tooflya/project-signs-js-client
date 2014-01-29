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

Restart = ExtendedPopup.extend({
  m_Animation: false,
  m_FrameAnimationTime: 1.1,
  m_TotalAnimationTime: 3.3,
  m_FrameAnimationTimeElapsed: 0,
  m_TotalAnimationTimeElapsed: 0,
  ctor: function(parent) {
    this._super(parent);

    Restart.instance = this;

    this.m_Background = Entity.create(s_PopupBackground, this, true);

    this.m_Text = Entity.create(s_RestartText, this);

    this.m_TimeNumber = TiledEntity.create(s_RestartNumbers, 3, 1, this);

    this.m_Text.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(50));

    this.m_TimeNumber.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(70));
  },
  update: function(time) {
    this._super(time);

    if(this.m_Animation) {
      this.m_FrameAnimationTimeElapsed += time;
      this.m_TotalAnimationTimeElapsed += time;

      if(this.m_FrameAnimationTimeElapsed >= this.m_FrameAnimationTime) {
        this.m_FrameAnimationTimeElapsed = 0;

        this.m_TimeNumber.nextFrameIndex();
        this.m_TimeNumber.setScale(1);
        this.m_TimeNumber.runAction(false, {name: 'scale', time: 1, value: 1.5});
      }

      if(this.m_TotalAnimationTimeElapsed >= this.m_TotalAnimationTime) {
        this.m_TotalAnimationTimeElapsed = 0;
        this.m_Animation = false;

        this.hide();
      }
    }
  },
  onEnter: function() {
    this._super();

    this.m_FrameAnimationTimeElapsed = 0;
    this.m_TotalAnimationTimeElapsed = 0;

    this.m_TimeNumber.setCurrentFrameIndex(0);
    this.m_TimeNumber.setScale(1);
    this.m_TimeNumber.runAction(false, {name: 'scale', time: 1, value: 1.5});

    this.m_Animation = true;
  },
  onExit: function() {
    this._super();
  }
});

Restart.create = function(parent) {
  var popup = new Restart(parent);

  return popup;
}

Restart.instance = false;
Restart.sharedScreen = function() {
  return Restart.instance ? Restart.instance : Restart.create();
};
