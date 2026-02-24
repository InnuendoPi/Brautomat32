# Actuators

![Actuator settings](/docs/img/aktoren_einstellungen.jpg)

Actuators such as agitators, pumps, or ring heaters are configured with a name and a GPIO output.
If needed, an actuator can use PWM (pulse-width modulation). In Brautomat, PWM means timed on/off switching.

Power is entered in percent:

* 100% = always on
* 50% = equal on/off cycle

The PWM cycle time is 500 ms. During operation, you can change power with the `+` and `-` buttons in the actuator table. These buttons are visible only when PWM is enabled for that actuator.

PWM control is suitable for relays and SSR outputs. It is not intended as direct speed control for agitator motors.

![Overview of actuators](/docs/img/aktoren.jpg)

## Webhook

Set the actuator GPIO parameter to `-` to show webhook fields in the web interface. Then enter the base URL and the switching command:

![webhook](/docs/img/aktoren_webhook1.jpg)

Example: Shelly 1PM

Turn on Shelly 1PM: <http://192.168.1.5/relay/0?turn=on>  
Turn off Shelly 1PM: <http://192.168.1.5/relay/0?turn=off>

Webhook base URL for Shelly 1PM: <http://192.168.1.5/relay/0?turn=> (without `on` and `off`).
The webhook switch parameter should be set to `on/off`.

Tasmota example URL: <http://192.168.1.5/cm?cmnd=Power1%201>
