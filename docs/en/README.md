# The Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Brautomat is a brewing controller for ESP32 D1 mini systems. It helps you run mash rests reliably, automate timer handling, and control boiling phases in a structured way. In a classic infusion process, the mash can be run almost fully automatically.

The project started with direct control of GGM IDS2 cookers. Since version 1.48, relay-based setups are also supported. Many examples in this guide use a GGM IDS, but most features are hardware-independent.

Status of the instructions: Release line `main` (version 1.60). Local development builds may vary.

---

## Layout of this guide

These instructions are in no fixed order and do not need to be read from top to bottom. The topic area _Software_ with the chapter _The Mash Plan_ is particularly suitable for getting started. The chapter _The mash plan_ includes an example brewing day at the end of the functional description.

This guide is divided into three subject areas:

* Software: the use of firmware Brautomat
  * Installation
  * Basic setup
  * The mash plan
  * AutoTune PID
  * Sensors, kettles, NACHGUSS kettles and actuators
  * Fermenter mode
* Hardware: the circuit board and appropriate extensions
  * The circuit board structure and connections
  * The display
  * 3D housing
  * additional hardware
* Info and FAQs
  * KleinerBrauhelfer2
  * the MQTTDevice

The topic area _Software_ is concluded with a summary _Parameters at a glance_. Details and information are provided for many parameters to simplify configuration and use.

## Brautomat Release Version

The release version of Brautomat is compiled with the current stable Espressif framework. This version is intended for productive use. The release version is provided without the logging module and is therefore slightly faster. The release version should be used preferentially for productive operation.

## Brautomat Development Version

The development version of Brautomat is also compiled with the current Espressif framework. This version contains the logging module. New features and bug fixes appear first in the development version. It can be used productively, but it is not primarily intended for that purpose.


