# Brautomat: Intuitive Brewing Control for Homebrewers

> **Note:** translation still in progress

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

The Brautomat is a brewing controller specifically designed for the ESP32 D1 mini. It is utilized in the brewhouses of homebrewers and is characterized by its user-friendly operation. During mashing, rest temperatures are automatically reached, and the corresponding times are precisely maintained. Additionally, the Brautomat assists in the brewing process during wort boiling and hop additions. Using infusion brewing method, the Brautomat can fully automate the mashing and boiling process.

> **Note:** This manual is continuously expanded, corrected, and improved. Originally, the Brautomat project could only control the GGM IDS2 induction hob. Since version 1.48, other induction hobs can also be connected in relay mode. Although the manual describes functions with a GGM IDS in many sections, only the manual mode is exclusively suitable for the GGM IDS2. All other functions are also available for other products.

## Structure of this manual

This manual is not linear and does not need to be read from top to bottom. For beginners, it is recommended to start with the "The Software" section, especially the chapter "The Mashing Plan".

The manual is divided into three main areas:

* The software: usage of the Brautomat firmware
  * Installation
  * Basic setup
  * The mashing plan
  * AutoTune PID
  * Sensors, actors, and sparging
* The Hardware: The circuit board and suitable extensions
  * Structure and connections of the circuit board
  * The display
  * 3D-printed housing
* Additional hardware
* Information and FAQs:
  * KleinerBrauhelfer2
  * The MQTTDevice

The "The software" section concludes with an overview of parameters. Detailed information is provided for many parameters to simplify configuration and application.

## Brautomat release version

Release type Brautomat32 is compiled with stable release framework ESP espressif. This version is for productive use. This version does not include logging modul. Brautomat releases are faster and smaller than development versions due to excluded modul logging. They do not print logging outputs on serial monitor while brewing. Release versions should always be preferred if a serial monitor is not connected.

## Brautomat development version

Development type Brautomat32 is compiled with latest framework ESP espressif. This version includes the logging modul. Also new functions and bug fixes are available in development versions first. Development versions can be used productively, but it is not recommended. New functions may still be under development.

## Why GGM IDS induction hobs?

There are two reasons why these devices should be used:

1. The main circuit board is safely separated from the controller board by optocouplers. This separation makes it safely possible to replace the original control system with the Brautomat32.
  ![main circuit board](/docs/img/IDS5_2.jpg)

2. The original controller was read out using a digital analyzer. This means that the serial commands for the power stages are known and can be used precisely.
  ![logic analyzer](/docs/img/IDS5.jpg)

GGM IDS1 and IDS5 offer 10 powersteps, IDS2 offers 5 powersteps operating with max. 3.5kW. Replacing the original control system with the Brautomat is very easy. The cases IDS1 and IDS2 must not be opened. Just simply disconnect the external control unit. The housing of IDS5 needs to be opened.
