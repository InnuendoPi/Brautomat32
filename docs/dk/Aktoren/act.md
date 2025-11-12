# Actors

![Actor settings](/docs/img/aktoren_settings.jpg)

Actuators such as agitators, pumps or ring heating elements are configured with a name and a GPIO (switch). Actuators can have the PWM (pulse width modulation) property. PWM in Brautomat is a timing of power (switching on and off or current flows and current does not flow). The entry is made in percent. Always on is 100%. In the case of a kettle, this would mean permanent maximum performance. A PWM of 50% would be 50:50 current flowing and current not flowing. The pulse interval is 500ms. The power can be changed during operation using the two buttons in the actuator table. The power change buttons are visible for each actuator if PWM has been enabled for the actuator. The PWM function in Brautomat is suitable, for example, for relays or SSRs. The function as a motor control for agitators is not suitable.

![Overview of actors](/docs/img/aktoren.jpg)

## webhook

The Actuator GPIO parameter must be set to "-" so that the webhook elements are displayed in the web interface. In addition, the webhook URL and the sound command are required:

![webhook](/docs/img/aktoren_webhook1.jpg)

Example Shelly 1PM:

Turn on Shelly 1PM: <http://192.168.1.5/relay/0?turn=on>\
Turn off Shelly 1PM: <http://192.168.1.5/relay/0?turn=off>

The webhook URL for Shelly 1PM is: <http://192.168.1.5/relay/0?turn=> (without on and off). The webhook switch parameter must be set to "on/off".

URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
