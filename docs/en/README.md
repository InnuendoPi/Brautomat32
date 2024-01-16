# Brautomat - en

Brautomat is a brewing control for induction hobs GGM IDS with an ESP32 Wemos D1 mini. Brautomat is used in the brewhouse by hobby brewers and offers intuitive, easy-to-use controls. During mashing, rest temperatures are reached automatically and the rest times are adhered to. Brautomat also supports the hobby brewer when boiling the wort and adding hops. In the ascending infusion process, the brautomat can fully automate the mashing process.

 _Note: induction hobs from other manufacturers are not supported._

 _Note: this manual is under construction._

## Content

This guide is divided into three subject areas:

* Software: how to use Brautomat firmware
  * installation
  * basic setup
  * mash plan
  * AutoTune PID
  * sensors, actors und sparge water (hlt)
  * recipes
* Hardware: circuit board and suitable extensions
  * circuit board structure and connections
  * display
  * 3D case
  * additional hardware
* Infos, FAQs & co
  * kleineBrauhelfer2
  * MQTTDevice

This manual does not have any order and do not need to be read from top to bottom.

## Overview

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

_"Legal note: Boxing Bell" (info), "Short School Bell" (error), "Ding sound effect" (warning) and "Success sound effect" (success) mp3 from Free Sounds Library [http://www.freesoundslibrary.com](http://www.freesoundslibrary.com) Licence: Attribution 4.0 International (CC BY 4.0). You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or non-commercial purposes._
