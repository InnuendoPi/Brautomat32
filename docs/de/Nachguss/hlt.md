# Nachguss

Der Brautomat bietet optional die Möglichkeit, einen "Kessel" für den Nachguss zu konfigurieren. Der Nachguss kann z.B. ein einfacher Wasserkocher sein. Die Konfiguration erfolgt identisch wie bei der Grundeinstellung beschrieben.

Ein neuer Konfigurationsparameter "GPIO invertieren" wird für den Nachguss und auch für die Konfiguration von Aktoren angeboten. GPIOs können beim Einschalten des Wemos standardmäßig auf HIGH gesetzt werden. HIGH bedeutet "es fließt Strom". Entsprechend bedeutet LOW, dass kein Strom fließt. Die Werkseinstellung des Wemos und das allgemeine Verständnis eines On/Off-Schalters wäre also, dass beim Einschalten des Wemos alle GPIOS (Schalter) auf On stehen. GPIO invertieren kehrt die Werkseinstellung um.
