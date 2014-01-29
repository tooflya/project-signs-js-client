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

var s_PreloaderBackground = "start-preloader-bg.png";
var s_LoadingBarBackground = "start-preloader-down.png";
var s_LoadingBarTopBackground = "start-preloader-up.png";
var s_LoadingBar = "start-preloader-fill.png";
var s_MenuBackground = "main-menu-bg.png";
var s_MenuTopBackground = "main-menu-bg-spots.png";
var s_MenuBestScoreBackground = "main-menu-best-score-popup.png";
var s_MenuMainButtonsBackground = "main-menu-btn-play-bg.png";
var s_MenuSettingsButtonBackground = "main-menu-btn-settings-bg.png";
var s_MenuMusicButtonBackground = "main-menu-btn-sound-bg.png";
var s_MenuSoundButtonBackground = "main-menu-btn-sound-bg.png";
var s_MenuCreditsButtonBackground = "main-menu-btn-sound-bg.png";
var s_MenuSocialButtonsBackground = "main-menu-soc-bg.png";
var s_MenuAchievementsButton = "main-menu-btn-achievement.png";
var s_MenuCreditsButton = "main-menu-btn-credits.png";
var s_MenuFacebookButton = "main-menu-btn-fb.png";
var s_MenuMusicButton = "main-menu-btn-melody-sprite.png";
var s_MenuMoreGamesButton = "main-menu-btn-more.png";
var s_MenuPlayButton = "main-menu-btn-play.png";
var s_MenuSettingsButton = "main-menu-btn-settings.png";
var s_MenuShopButton = "main-menu-btn-shop.png";
var s_MenuSoundButton = "main-menu-btn-sound-sprite.png";
var s_MenuTwitterButton = "main-menu-btn-tw.png";
var s_BackButton = "back-button.png";
var s_MenuLettersBackgrounds1 = "main-menu-name-s-first-bg.png";
var s_MenuLettersBackgrounds2 = "main-menu-name-i-bg.png";
var s_MenuLettersBackgrounds3 = "main-menu-name-g-bg.png";
var s_MenuLettersBackgrounds4 = "main-menu-name-n-bg.png";
var s_MenuLettersBackgrounds5 = "main-menu-name-s-last-bg.png";
var s_PopupBackground = "popup.png";
var s_MenuEasyButon = "difficulty-menu-btn-easy.png";
var s_MenuNormalButon = "difficulty-menu-btn-normal.png";
var s_MenuHardButon = "difficulty-menu-btn-expert.png";
var s_GameTableBackground = "game-gui-table.png";
var s_GamePanel = "game-gui-panel.png";
var s_GameScoreText = "game-gui-score-text.png";
var s_GameButtonsBackground = "main-menu-btn-sound-bg.png";
var s_GameRollButton = "game-gui-btn-roll.png";
var s_GameShopButton = "game-gui-btn-shop.png";
var s_GameAchievementsButton = "game-gui-btn-achiv.png";
var s_GameMenuButton = "game-gui-btn-menu.png";
var s_GamePauseButton = "game-gui-btn-pause.png";
var s_GameRestartButton = "game-gui-btn-restart.png";
var s_QuitText = "main-menu-quit-popup-text.png";
var s_QuitMenuText = "game-gui-menu-popup-text.png";
var s_RestartText = "game-gui-restart-popup-text.png";
var s_PauseText = "game-gui-pause-popup-text.png";
var s_YesButton = "game-gui-menu-popup-btn-yes.png";
var s_NoButton = "game-gui-menu-popup-btn-no.png";
var s_RestartNumbers = "game-gui-restart-popup-num-sprite.png";
var s_ContinueButton = "game-gui-pause-popup-btn.png";
var s_ThirdBackground = "popup-shop-bg.png";
var s_ScreensMasking = "whole-transition.png";
var s_PopupDecorations1 = "popup-sprite-1.png";
var s_PopupDecorations2 = "popup-sprite-5.png";

var resources = [
  {src: s_PreloaderBackground},
  {src: s_LoadingBarBackground},
  {src: s_LoadingBar},
  {src: s_MenuBackground},
  {src: s_MenuBackground},
  {src: s_MenuBestScoreBackground},
  {src: s_MenuMainButtonsBackground},
  {src: s_MenuSettingsButtonBackground},
  {src: s_MenuMusicButtonBackground},
  {src: s_MenuSoundButtonBackground},
  {src: s_MenuCreditsButtonBackground},
  {src: s_MenuSocialButtonsBackground},
  {src: s_MenuAchievementsButton},
  {src: s_MenuCreditsButton},
  {src: s_MenuFacebookButton},
  {src: s_MenuMusicButton},
  {src: s_MenuMoreGamesButton},
  {src: s_MenuPlayButton},
  {src: s_MenuSettingsButton},
  {src: s_MenuShopButton},
  {src: s_MenuSoundButton},
  {src: s_MenuTwitterButton},
  {src: s_BackButton},
  {src: s_MenuLettersBackgrounds1},
  {src: s_MenuLettersBackgrounds2},
  {src: s_MenuLettersBackgrounds3},
  {src: s_MenuLettersBackgrounds4},
  {src: s_MenuLettersBackgrounds5},
  {src: s_PopupBackground},
  {src: s_MenuEasyButon},
  {src: s_MenuNormalButon},
  {src: s_MenuHardButon},
  {src: s_GameTableBackground},
  {src: s_GamePanel},
  {src: s_GameScoreText},
  {src: s_GameButtonsBackground},
  {src: s_GameRollButton},
  {src: s_GameShopButton},
  {src: s_GameAchievementsButton},
  {src: s_GameMenuButton},
  {src: s_GamePauseButton},
  {src: s_GameRestartButton},
  {src: s_QuitText},
  {src: s_QuitMenuText},
  {src: s_RestartText},
  {src: s_PauseText},
  {src: s_YesButton},
  {src: s_NoButton},
  {src: s_RestartNumbers},
  {src: s_ThirdBackground},
  {src: s_ScreensMasking},
  {src: s_PopupDecorations1},
  {src: s_PopupDecorations2},
];
