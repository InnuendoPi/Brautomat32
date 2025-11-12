# The Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

The Brautomat is a brewing control for the ESP32 D1 mini. The Brautomat is used in the brewhouse and offers an intuitive, easy-to-use control. During mashing, rest temperatures are reached automatically and the rest times are adhered to. The Brautomat also supports wort boiling and adding hops and ingredients. In the ascending infusion process, the Brautomat can fully automate the mashing process.

> **Note:**
This page was automatically translated from the original German documentation.
\
These instructions are constantly being expanded, corrected or improved. Originally only the GGM IDS2 induction hob could be controlled in the Brautomat project. From version 1.48, other hobs can also be connected in relay mode. The instructions describe the functions with a GGM IDS in many places. Only the manual mode is exclusively suitable for the GGM IDS2. All other functions and options are also available for other hobs.

 ---

## Layout of this guide

These instructions are in no order and do not need to be read from top to bottom. The subject area _Software_, especially the chapter _The mash plan_, is recommended for entry into the Brautomat. The chapter _The mash plan_ includes an example brewing day at the end of the explanations of the functions.

This guide is divided into three subject areas:

* Software: the use of firmware Brautomat
  * Installation
  * Basic setup
  * The mash plan
  * AutoTune PID
  * Sensors, brew kettles, refills and actuators
  * Fermenter mode
* Hardware: the circuit board and appropriate extensions
  * The circuit board structure and connections
  * The display
  * 3D housing
  * additional hardware
* Info and FAQs
  * small brewing helper2
  * the MQTTDevice

The topic area _Software_ is concluded with a summary _Parameters at a glance_. Details and information are provided for many parameters to simplify configuration and use.

## Brautomat Release Version

The release version of Brautomat is compiled with the current stable framework espressif. This version is for productive use. The release version is provided without the Logging module. The version is slightly faster. The release version should be used preferentially.

## Brautomat Development version

The development version of Brautomat is compiled with the current esspressif framework. This version is provided with the Logging module. New features and bug fixes are first released in the development version. This version can be used productively, but is not recommended.
