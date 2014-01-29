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

ExtendedPopup = Popup.extend({
  color: cc.c4(255, 252, 232, 255),
  m_Elements: false,
  m_ShowTime: 0.3,
  m_HideTime: 0.3,
  m_ElementsTime: 0.5,
  m_ElementsTimeElapsed: 0,
  m_Clipper: false,
  m_Stencil: false,
  m_Scale: 3,
  ctor: function(parent) {
    this._super(cc.c4(0, 0, 0, 0), parent);

    this.m_Clipper = this.clipper();
    this.m_Stencil = this.stencil();

    this.m_Clipper.addChild(this.m_Stencil);

    this.addChild(this.m_Clipper);

    this.m_Elements = EntityManager.create(100, PopupDecoration.create(), this.m_Stencil);
  },
  show: function() {
    this._super();

    this.m_Background.setScale(0);
    this.m_Clipper.getStencil().runAction(cc.ScaleTo.create(this.m_ShowTime, 0));
    this.m_Background.runAction(cc.CallFunc.create(this.onShow, this), {
      name: 'scale',
      time: this.m_ShowTime,
      value: 1
    });

    this.m_Elements.clear();
  },
  hide: function() {
    this.m_Clipper.getStencil().runAction(cc.ScaleTo.create(this.m_HideTime, this.m_Scale));
    this.m_Background.runAction(cc.CallFunc.create(this.onHide, this), {
      name: 'scale',
      time: this.m_HideTime,
      value: 0
    });
  },
  onShow: function() {

  },
  onHide: function() {
    this.removeFromParent();
  },
  update: function(time) {
    this._super(time);

    if(this.m_Elements.getCount() < this.m_Elements.getCapacity()) {
      this.m_ElementsTimeElapsed += time;

      if(this.m_ElementsTimeElapsed >= this.m_ElementsTime) {
        this.m_ElementsTimeElapsed = 0;

        this.m_Elements.create();
      }
    }
  },
  stencil: function() {  
    var stencil = BackgroundColor.create(this.color);

    stencil.setPosition(cc.p(-Camera.sharedCamera().center.x, -Camera.sharedCamera().center.y));

    return stencil;
  },
  clipper: function() {
    var stencil = cc.Sprite.create(s_ScreensMasking);
    var clipper = cc.ClippingNode.create(stencil);

    stencil.setScale(this.m_Scale);

    clipper.setInverted(true);
    clipper.setPosition(cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y));

    return clipper;
  },
});