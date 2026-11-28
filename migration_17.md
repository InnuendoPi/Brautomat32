# Migrating from 1.66.x to 1.7

The new IDF6 partition layout requires a one-time USB migration with
[ServiceTool 2.1.0 or later](https://github.com/InnuendoPi/ServiceTool/releases/latest).

1. Finish brewing and fermentation processes. Connect the Brautomat via USB
   and make sure it is reachable over Wi-Fi.
2. Under **Service → Migration**, manually select **IDF6 Development**.
   Check the serial port and displayed target version.
3. Select **Start migration**. ServiceTool backs up the data, writes the new
   partition table, main firmware and ServiceApp, and restores the backup.
   Keep USB and power connected until completion.
4. Check settings, recipes and equipment assignments before brewing again.

[Full guide in GitBook](https://github.com/InnuendoPi/Brautomat32/blob/gitbook/docs/en/Installation/info.md#migrate-to-171-development)
