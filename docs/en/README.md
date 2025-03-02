# Brautomat: Intuitive Brewing Control for Homebrewers

The Brautomat is a brewing controller specifically designed for the ESP32 D1 mini or the ESP8266 Wemos D1 mini. It is utilized in the brewhouses of homebrewers and is characterized by its user-friendly operation. During mashing, rest temperatures are automatically reached, and the corresponding times are precisely maintained. Additionally, the Brautomat assists in the brewing process during wort boiling and hop additions. In the rising infusion method, the Brautomat can fully automate the mashing process.

> **Note:** This manual is continuously expanded, corrected, and improved. Originally, the Brautomat project could only control the GGM IDS2 induction cooktop. Since version 1.48, other cooktops can also be connected in relay mode. Although the manual describes functions with a GGM IDS in many sections, only the manual mode is exclusively suitable for the GGM IDS2. All other functions are also available for other cooktops.

## Structure of this Manual

This manual is not linear and does not need to be read from top to bottom. For beginners, it is recommended to start with the "The Software" section, especially the chapter "The Mashing Plan".

The manual is divided into three main areas:

* The Software: Usage of the Brautomat firmware
  * Installation
  * Basic Setup
  * The Mashing Plan
  * AutoTune PID
  * Sensors, Actuators, and Sparging
* The Hardware: The circuit board and suitable extensions
  * Structure and connections of the circuit board
  * The Display
  * 3D-printed housing
* Additional hardware
* Information and FAQs:
  * KleinerBrauhelfer2
  * The MQTTDevice

The "The Software" section concludes with an overview of parameters. Detailed information is provided for many parameters to simplify configuration and application.
