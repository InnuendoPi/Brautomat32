# Nachguss

Der Brautomat bietet optional die Möglichkeit, einen "Kessel" für den Nachguss zu konfigurieren. Der Nachguss kann bspw. ein einfacher Wasserkocher sein. Die Konfiguration wird in identischer Weise wie in der Grundeinrichtung beschrieben durchgeführt.

Ein neuer Konfigurationsparameter "GPIO invertieren" wird bei der Nachguss und auch bei der Konfigruation von Aktoren angeboten. GPIOs können beim Einschalten des Wemos per Standardeinstellung auf HIGH stehen. HIGH bedeteutet "es fließt Strom". Dementsprechend bedeutet LOW es fließt kein Strom. Die Werkseinstellung vom Wemos und das allgemeine Verständnis von einem Ein-Aus Schalter wäre demnach, dass mit der Stromzufuhr Wemos alle GPIOS (Schalter) auf Eingeschaltet stehen. GPIO invertieren dreht die Werkseinstellung um.
