# Structure of the board version 2

This short guide describes the structure of the board. The board structure is not demanding. This short description is intended as an aid for the inexperienced hobbyist and is not aimed at electrical engineers. Information about soldering, suitable soldering irons and solder can be found on YouTube or similar channels.

The parts list of the board:

![BOM](/docs/img/Aufbau1.jpg)

Number 1: Resistor 4.7kOhm\
Number 2: JST-HX socket (white) and 5-pin screw terminal block\
Number 3: passive piezo buzzer\
Number 4: Screw terminal blocks with a pitch of 2.54mm

## Parts list for version 2 board

The JST-HX socket position is an alternative to the 5-pin screw terminal block. The cable from the control panel of the GGM IDS2 has the appropriate plug for a JST-HX socket. If a replacement cable is used instead of the original cable, the connection is easier with a 5 screw terminal block.

| Number | Item name | Link to article |
| ----------------------------------------------------- | ------------------------------ | --------------------------------- |
| 3 | Screw terminal block 3-pin RM 2.54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 optional | Screw terminal block 3-pin RM 2.54 | |
| 1 | Screw terminal block 5-pin RM 2.54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 alternative to the screw terminal block 5-pin | JST-HX socket 90° RM 2.54 | (voelkner D17526) |
| 2 | Screw terminal block 8-pin RM 2.54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 2 | Screw terminal block 12-pin RM 2.54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 | Pin header RM 2.54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1 | Resistance 4.7kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PX9FJN3H) |
| 1 optional | Passive buzzer 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 optional | Display Nextion 3.5" | [amazon](https://www.amazon.de/dp/B09PL9CTZ7/?coliid=I14PAW5R7XN3MC&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_15EQ8G7TVRFSGNWTHM5Y) |
|                                                       |                                |                                   |

_Note: the links or item numbers listed are purely informative and not linked to affiliate/marketing programs._

The Nextion 3.5 inch display is available as Basic, Discovery or Enhanced. The currently cheapest model can be selected for the Brautomat. Displays with 2.8 inches or smaller and 4 inches and larger have a different pixel resolution and are not supported by Brautomat!

## Considerations before construction

The board can be equipped differently depending on the connection to the GGM IDS induction hob:

1.1 The original cable from the GGM IDS control panel is used

In this case, the white JST-HX socket is required (number 2 in the picture). The 5 screw terminal block in the picture directly next to the JST-HX socket is then not used.

1.2 A replacement cable is used

In this case the white JST-HX socket is not used, but the 5 screw terminal block.

So either the JST-HX socket or the 5 screw terminal block is inserted into the board.

## Insert the screw terminal blocks

Two notes on inserting the screw terminal blocks:

1. The opening of the screw terminal blocks always faces outwards (away from the circuit board).
2. The screw terminal blocks are fixed with a soldering point. The correct fit is then checked. All soldering points are then soldered.

In the following, the screw terminal blocks are inserted and soldered step by step.\
In step number 1 the zwhite 12-pin screw terminal blocks used. The GPIOs D9 to D19 from ESP32 are connected to the 12 screw terminal blocks.

![Screw terminal block](/docs/img/Aufbau2.jpg)

Now turn the board over and fix each screw terminal block with a soldering point. Now check that the screw terminal blocks are correctly seated. All pins must be correctly inserted through the soldering points. All pins are then soldered.

In step number 2, the two 8-pin screw terminal blocks are inserted. The GPIOs D0 to D8 from ESP32 are connected to the 8 screw terminal blocks.

![Screw terminal blocks](/docs/img/Aufbau3.jpg)

The board now looks like this in this status:

![Screw terminal blocks](/docs/img/Aufbau4.jpg)

In step number 3, the three 3 screw terminal blocks are inserted and soldered.

![Screw terminal block for sensors](/docs/img/Aufbau5.jpg)

DS18B20 temperature sensors are connected to the three connections. There is no order or hierarchy for these three connections. If only analog PT100x sensors are used, the three screw terminal blocks can be omitted.

With version 2.1 of the board, an optional 3 screw terminal block can be used at the GND position next to the 3 screw terminal blocks for sensors. The additional GND connections are useful when actuators (pumps, agitators, etc.) are used. If no actuators are used, the screw terminal block can be omitted.

In step number 4, either the JST-HX socket for the original cable or a 5 screw terminal block for the replacement cable is inserted and soldered: (see considerations before assembly).

![JST-HX or screw terminal block](/docs/img/Aufbau6.jpg)

## The piezo buzzer

The piezo buzzer is optional. This step can be skipped if acoustic signals are not desired.\
The piezo buzzer has a plus and a minus pole

![Buzzer Plus Minus](/docs/img/Aufbau8.jpg)

The positive pole is inserted into the D8 marking and, accordingly, the negative pole into the GND marking.

![Buzzer](/docs/img/Aufbau7.jpg)

## The 4.7kOhm resistor

The 4.7kOhm resistor is mandatory for the Dallas DS18B20 temperature sensors. If only analog PT100x sensors are used, the resistor can be omitted.

![Resistance](/docs/img/Aufbau9.jpg)

The legs on the resistance are bent through 90° (e.g. around a slotted screwdriver). The resistor is then inserted into the position labeled “4k7”. The direction does not have to be taken into account. The basic color of resistors is often blue or sand-colored. The colored rings show the electrical resistance:

4.7kOhm resistor with 4 rings: yellow - violet - red - [tolerance]

4.7kOhm resistor with 5 rings: yellow - violet - black - brown - [tolerance]

![Resistance](/docs/img/Aufbau10.jpg)

The legs of the resistance are bent slightly outwards on the back and soldered. Use side cutters to cut off the legs above the soldering eye.

## Mount the ESP microcontroller

By mounting the base, the ESP microcontroller can be removed from the board at any time. Socketing is also useful when troubleshooting.

![Socket](/docs/img/Aufbau14.jpg)

The scope of delivery of the ESP microcontrollers includes adapter number 1. In addition, a pin header number 2 with a pitch of 2.54mm is required.

![Parts List](/docs/img/Aufbau11.jpg)

Adapters and pin headers are required for socketing. The pin header is first plugged into the adapter, as shown in number 3. Adapters with pin strips are then inserted into the circuit board, two on the left and two on the right

_Tip: the pin header is delivered as a 40 pin header. The full length of the pin header is inserted into the adapter. The overhang over the adapter is bent at the end._

![Socket](/docs/img/Aufbau12.jpg)

Now the ESP is put on and fixed with a soldering point on each side. Now the fit of the bases is checked. All soldering points are then soldered.

![ESP32](/docs/img/Aufbau15.jpg)

Finally, all soldering points should be practicedbe checked. When all soldering points are closed, the Brautomat is ready.
