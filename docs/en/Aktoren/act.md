# Actors

![media](/docs/img/actuators_settings.jpg)

Actors such as stirrers, pumps or ring heaters are configured with a name and a GPIO (switch). Actors can have the PWM (pulse width modulation) property. PWM in Brautomat is a clocking of the power (switching on and off or current flows and current does not flow). The input is in per cent. Constantly switched on is 100%. In the case of a kettle, this would be maximum power at all times. A PWM of 50% would be 50:50 current flowing and current not flowing. The pulse interval is 500ms. The power can be changed during operation using the two buttons in the actor table. The buttons for changing the power are visible for each actuator if PWM has been activated for the actor. The PWM function in Brautomat is suitable for relays or SSRs, for example. The function is not suitable as a motor control for agitators.

![media](/docs/img/actuators.jpg)
