# Der Brautomat

Brautomat is a brewing control for induction hobs GGM IDS with an ESP32 Wemos D1 mini. Brautomat is used in the brewhouse by hobby brewers and offers intuitive, easy-to-use controls. During mashing, rest temperatures are reached automatically and the rest times are adhered to. Brautomat also supports the hobby brewer when boiling the wort and adding hops. In the ascending infusion process, the brautomat can fully automate the mashing process.

 _Note: induction hobs from other manufacturers are not supported._

Die Hauptfunktionen vom Brautomat sind:

* induction hob controller
* integrated PID-Controller
* PID-AutoTune
* Mash plans management
* Mash plans with up to 20 steps
* Hot liquid tank controller (HLT)
* Controlling actors like agitator, pumps etc.
* PWM
* Temperature progression in the mashing process (line chart)
* Recipe import kleinen Brauhelfer2
* Recipe import Maische Malz und Mehr
* Recipe import BrewFather
* Recipe export
* 3,5" HMI Touchdisplay Nextion (optional)

## 📚 Dokumentation

Manual: [https://innuendopi.gitbook.io/brautomat\_de/](https://innuendopi.gitbook.io/brautomat\_de/)

Discussion: [https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504](https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504)

Changelog: [https://github.com/InnuendoPi/Brautomat/blob/main/CHANGELOG.md](CHANGELOG.md)

## 📰 WebInterface

The Brautomat is controlled via a web browser. It will be a browser with support for CSS3, HTML5; Javascript and Server Sent Events (SSE) required.\

Browser list [Browser](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#browser_compatibility)

![Startseite](/docs/img/brautomat.jpg)

![Startseite](/docs/img/IDS-AutoTune-Ziel.jpg)

![Startseite](/docs/img/brautomat-2.jpg)

## 💻 Nextion HMI Touchdisplay

Note: the display is an optional extension. Only Nextion ITEAD HMI 3.5 Zoll Displays are supported.

* Overview
* Mash tun
* Manual control cooking

![Overview](/docs/img/kettlepage-sm.jpg) ![Mash tun](/docs/img/brewpage-sm.jpg) ![Manual control](/docs/img/induction-mode-sm.jpg)

_"Boxing Bell" (info), "Short School Bell" (error), "Ding sound effect" (warning) and "Success sound effect" (success) mp3 from Free Sounds Library [http://www.freesoundslibrary.com](http://www.freesoundslibrary.com) Licence: Attribution 4.0 International (CC BY 4.0). You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or non-commercial purposes._
