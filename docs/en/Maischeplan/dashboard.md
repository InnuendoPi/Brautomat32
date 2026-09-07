# The Dashboard

![Dashboard](/docs/img/dashboard165.jpg)

Dashboard mode is optimized for brew day. Once kettles, actuators, and sensors are configured, it combines the most relevant controls and status information in one view.

## Enable dashboard

Enable Dashboard in system settings:

![Dashboard](/docs/img/dashboard160-1.jpg)

Depending on your setup, you can choose which modules should appear in Dashboard.

* Configuration blocks for sensors/actuators/kettles can be hidden.
* Runtime control elements stay available in Dashboard.

## Using dashboard

When brewing starts, the UI automatically switches to dashboard-oriented layout:

* mash plan table is collapsed
* active mash step is shown above controls
* next mash step is shown above the chart
* next-step state reflects `autonext` (green/red indicator)

You can reopen the mash plan at any time with the collapse button. During pause, the mash plan is also opened automatically. Hidden modules can still be re-enabled later in system settings.

## Dashboard as an info terminal

The dashboard can also be opened directly via:

* `http://brautomat.local/dashboard`

This view is intended as a reduced info terminal:

* only the dashboard is shown
* the remaining menus and control areas of the web interface stay hidden
* this is useful for a separate display with a web browser that should only show the current brewing status

## Connection to Brautomat

Live updates use a persistent connection to Brautomat. When all six available
connections are occupied, another browser waits and retries automatically.
Close unused Brautomat tabs to free a connection.

If the interface loads incompletely after a connection interruption, check that
the device is reachable and reload the page. Preserve any unsaved plan edits
first; reloading discards unsaved input.
