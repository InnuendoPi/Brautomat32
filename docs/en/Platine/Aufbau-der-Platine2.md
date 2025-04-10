# Assembly of the circuit board version 2

This short guide describes the construction of the board. The board assembly is not demanding. This short description is intended as an aid for the inexperienced hobbyist and is of course not aimed at experienced electrical engineers. Information on soldering, suitable soldering irons and solder can be found on youtube or similar channels.

The parts list of the circuit board:

![Stückliste](/docs/img/Aufbau1.jpg)

Number 1: Resistor 4.7kOhm\
Number 2: JST-HX socket (white) and 5-pin screw terminal block\
Number 3: passive piezo buzzer\
Number 4: Screw terminal blocks with a pitch of 2.54mm

## Parts list for the circuit board version 2

The JST-HX socket position is an alternative to the 5-pin screw terminal block. The cable from the control unit of the GGM IDS2 has the appropriate plug for a JST-HX socket. If a replacement cable is used instead of the signal cable, the connection with a 5-pin screw terminal blockj is easier.

| count                                                | article                    | link                  |
| ----------------------------------------------------- | ------------------------------ | --------------------------------- |
| 3                                                     | Schraubklemmblock 3pol RM 2.54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 optional                                            | Schraubklemmblock 3pol RM 2.54 | |
| 1                                                     | Schraubklemmblock 5pol RM 2.54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 alternativ zum Schraubklemmblock 5pol               | JST-HX Buchse 90° RM 2.54      | (voelkner D17526) |
| 2                                                     | Schraubklemmblock 8pol RM 2.54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 2                                                     | Schraubklemmblock 12pol RM 2.54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1                                                     | Stiftleiste RM 2.54            | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1                                                     | Widerstand 4,7kOhm             | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PX9FJN3H) |
| 1 optional                                            | Passiver Buzzer 12mm 3V        | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32                                               | ESP32 D1 mini                  | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 optional                                            | Display Nextion 3.5" | [amazon](https://www.amazon.de/dp/B09PL9CTZ7/?coliid=I14PAW5R7XN3MC&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_15EQ8G7TVRFSGNWTHM5Y) |
|                                                       |                                |                                   |

_Note: the links or article numbers listed are purely informative and are not linked to affiliate/marketing programs._

The Nextion 3.5 inch display is available as Basic, Discovery or Enhanced. The currently most favourable model can be selected for the Brautomat. Displays with 2.8 inch or smaller and 4 inch and larger have a different pixel resolution and are not supported by the Brautomat!

## Considerations before assembly

The circuit board can be equipped differently depending on the connection to the GGM IDS induction hob:

1.1 The original cable from the control panel of the GGM IDS is used

In this case, the white JST-HX socket is required (number 2 in the picture). The 5-pin screw terminal block in the picture directly next to the JST-HX socket is then not used.

1.2 A replacement cable is used

In this case, the white JST-HX socket is not used, but the 5-pin screw terminal block.

Either the JST-HX socket or the 5-pin screw terminal block is therefore inserted into the circuit board.

## Inserting the screw terminal blocks

Two notes on inserting the screw terminal blocks:

1. the opening of the screw terminal blocks always faces outwards (away from the circuit board).
2. the screw terminal blocks are fixed in place with a soldering point. Then check that they are seated correctly. All soldering points are then soldered.

The screw terminal blocks are now inserted and soldered step by step.\
In step number 1, the two 12-pin screw terminal blocks are inserted. The GPIOs D9 to D19 of the ESP32 are connected to the 12-pin screw terminal blocks.

![screw terminal](/docs/img/Aufbau2.jpg)

Now turn the circuit board over and fix each screw terminal block with a soldering point. Now check that the screw terminal blocks are seated correctly. All pins must be correctly inserted through the solder points. All pins are then soldered.

In step number 2, the two 8-pin screw terminal blocks are inserted. The GPIOs D0 to D8 of the ESP32 are connected to the 8-pin screw terminal blocks.

![screw terminal](/docs/img/Aufbau3.jpg)

The circuit board now looks like this in this status:

![screw terminal](/docs/img/Aufbau4.jpg)

In step number 3, the three 3-screw terminal blocks are inserted and soldered.

![screw terminals for sensors](/docs/img/Aufbau5.jpg)

DS18B20 temperature sensors are connected to the three connections. There is no sequence or order of priority for these three connections. If only analogue PT100x sensors are used, the three screw terminal blocks can be omitted.

With version 2.1 of the board, an optional 3-screw terminal block can be used at the GND position next to the 3-screw terminal blocks for sensors. The additional GND connections are useful if actuators (pumps, agitator, etc.) are used. If no actuators are used, the screw terminal block can be omitted.

In step number 4, either the JST-HX socket for the original cable or a 5-pin screw terminal block for the replacement cable is inserted and soldered: (see considerations before assembly).

![JST-HX or screw terminal](/docs/img/Aufbau6.jpg)

## Der Piezo Buzzer

The piezo buzzer is optional. This step can be skipped if acoustic signals are not desired.\
The piezo buzzer has a positive and a negative pole.

![Buzzer Plus Minus](/docs/img/Aufbau8.jpg)

The positive pole is inserted into the D8 marker and the negative pole into the GND marker.

![Buzzer](/docs/img/Aufbau7.jpg)

## The 4.7kOhm resistor

The 4.7kOhm resistor is mandatory for the Dallas DS18B20 temperature sensors. If only analogue PT100x sensors are used, the resistor can be omitted.

![resistor](/docs/img/Aufbau9.jpg)

The legs on the resistor are bent by 90° (e.g. with a slotted screwdriver). The resistor is then inserted at the position labelled ‘4k7’. The direction does not have to be observed. The basic colour of resistors is often blue or sand-coloured. The coloured rings show the electrical resistance:

4.7kOhm resistor with 4 rings: yellow - violet - red - [tolerance]

4.7kOhm resistor with 5 rings: yellow - violet - black - brown - [tolerance]

![resistor](/docs/img/Aufbau10.jpg)

Die Beinchen vom Widerstand werden auf der Rückseite leicht nach außen gebogen und verlötet. Mit einem Seitenschneider werden die Beinchen über dem Lötauge abgeschnitten.

## Den ESP Microcontroller aufsockeln

Durch das Aufsockeln lässt sich der ESP Mikrocontroller jederzeit von der Platine abnehmen. Das Aufsockeln ist auch bei einer Fehlersuche nützlich.

![Aufsockeln](/docs/img/Aufbau14.jpg)

The ESP microcontrollers are supplied with adapter number 1 and an additional pin header number 2 with a pitch of 2.54 mm.

![Teileliste](/docs/img/Aufbau11.jpg)

Adapters and pin headers are required for socketing. The pin header is first plugged into the adapter, as shown in number 3. Then insert the adapter with pin header into the board, two on the left and two on the right

_Tip: the pin header is supplied as a 40-pin strip. The full length of the pin header is inserted into the adapter. The overhang over the adapter is snapped off at the end._

![Sockel](/docs/img/Aufbau12.jpg)

Now place the ESP on top and fix it with a soldering point on each side. Now check the fit of the sockets. All soldering points are then soldered.

![ESP32](/docs/img/Aufbau15.jpg)

Finally, all soldering points should be checked. If all soldering points are sealed, the Brautomat is ready.
