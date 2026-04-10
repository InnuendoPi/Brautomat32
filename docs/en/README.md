# The Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Brautomat is a brewing controller for ESP32 D1 mini systems.
It automates mash rests and timing, supports boil phases including hop additions,
and can run infusion-style mash processes with minimal manual intervention.

> **Note:**  
> This guide is continuously improved. Many examples use GGM IDS.
> Since version 1.48, relay-based setups are supported as well.
> Only manual mode is exclusive to GGM IDS2.

Guide status: release line `main` (version 1.60). Local development builds may differ.

## Recommended onboarding

For new users, follow this order:

1. [Installation](Installation/info.md)
2. [Safety check before first heat test](Installation/safety-check-first-heat-test.md)
3. [Basic setup](Grundeinrichtung/info.md)
4. [AutoTune step by step](Autotune-pid/steps.md)
5. [PID instructions](Kessel/PID-Anleitung.md)
6. [The Mash Plan](Maischeplan/info.md)
7. [Brew-day quick guide](Autotune-pid/brew-day-quick-guide.md)
8. [Troubleshooting](FAQ/troubleshooting.md) if behavior differs from expectation

Power-user chapters are explicitly marked in the table of contents and can be
skipped during initial onboarding.

## Guide structure

The documentation is organized into three areas:

- Software: installation, setup, mash plan, AutoTune, kettles/sensors/actuators
- Hardware: board, connections, display, housing, extensions
- Operations and service: parameters, logging, MQTT, API, troubleshooting

## Brautomat release version

The release version is built with the stable Espressif framework and is intended
for production use.

## Brautomat development version

The development version includes additional diagnostics/logging behavior.
New features and fixes appear here first.
