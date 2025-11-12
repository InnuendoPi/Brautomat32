# Sensors

The Brautomat supports up to three Dallas DS1B20 sensors and PT100x sensors via a MAX31865 amplifier. Dallas DS18B20 sensors are recommended as this type of sensor is easier to connect.

## Resolution DS18B20 sensors

This parameter can be used to set the resolution of the digital sensors DS18B20. The selection is applied to all DS18B20 sensors. The default value is HIGH with 12bit. The lower the resolution, the faster the measured temperature is calculated:

- HIGH 12bit: 750ms (0.0625°C)
- NORMAL 11bit: 375ms (0.125°C)
- LOW 10bit: 188ms (0.25°C)
- MIN 9bit: 94ms (0.5°C)
