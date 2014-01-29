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

PopupDecoration = TiledEntity.extend({
  m_Scale: 0,
  m_Rotation: 0,
  m_Opacity: 0,
  m_ScaleTo: 0,
  m_ScaleSpeed: 0,
  m_RotationSpeed: 0,
  m_AlphaSpeed: 0,
  m_Time: 0,
  m_TimeElapsed: 0,
  ctor: function() {
      this._super(s_PopupDecorations2, 4, 1);
  },
  onCreate: function() {
    this._super();

    var x = Random.sharedRandom().random(0, Camera.sharedCamera().width);
    var y = Random.sharedRandom().random(0, Camera.sharedCamera().height);

    this.m_Time = Random.sharedRandom().random(5.0, 20.0);
    this.m_TimeElapsed = 0;

    this.m_Scale = 0;
    this.m_Rotation = Random.sharedRandom().random(-720, 720);
    this.m_Opacity = 0;
    this.m_ScaleTo = Random.sharedRandom().random(0.1, 1.2);

    this.m_ScaleSpeed = Random.sharedRandom().random(0.001, 0.05);
    this.m_RotationSpeed = Random.sharedRandom().random(0.01, 1.0);
    this.m_AlphaSpeed = Random.sharedRandom().random(0.01, 1.0);

    this.setScale(this.m_Scale);
    this.setRotation(this.m_Rotation);
    this.setOpacity(this.m_Opacity);

    this.setCurrentFrameIndex(Random.sharedRandom().random(0, this.getFramesCount(), true));

    this.setCenterPosition(x, y);
  },
  update: function(time) {if(!this.isVisible()) return; 
    this._super(time);

    this.m_TimeElapsed += time;

    if(this.m_TimeElapsed >= this.m_Time) {
      if(this.getNumberOfRunningActions() <= 0) {
        this.runAction(cc.CallFunc.create(this.destroy, this), {
          name: 'scale',
          time: Random.sharedRandom().random(5.0, 10.0),
          value: 0
        })
      }
    } else {
      if(this.getOpacity() < 255) this.setOpacity(this.getOpacity() + this.m_AlphaSpeed);
      if(this.getScaleX() < this.m_ScaleTo) this.setScale(this.getScaleX() + this.m_ScaleSpeed);
    }

    this.setRotation(this.getRotation() + this.m_RotationSpeed);
  },
  deepCopy: function() {
    return PopupDecoration.create();
  }
});

PopupDecoration.create = function() {
  var entity = new PopupDecoration();

  return entity;
};
