# KleinerBrauhelfer2

Ab Version 2.5.0 hat das Programm [kleinerBrauhelfer2](https://kleiner-brauhelfer.de/) einen Export Filter für den Brautomat. Die Rezeptentwicklung und Gestaltung ist mit dem kleinenBrauhelfer2 in allen erdenklichen Details möglich. Mit dem Spickzettel bietet der kbh2 einen sehr guten und hilfreichen Ablaufplan für die praktische Umsetzung in der Brauküche. Mit dem Export Filter für den Brautomat können alle Schritte übernommen werden.

## Der kbh2 Tab Maischplan

Im Tab Maischplan bietet der kbh2 vier verschiedene Arten Malze zur Maische hinzuzufügen: Einmaischen, Aufheizen, Zubrühen und Dekoktion. Alle vier Arten werden im Brautomat unterstützt. Der Typ Einmaischen wird automatisch mit deaktiviertem autonext eingefügt. Aufheizen und Zubrühen mit aktiviertem autonext. Die Dekoktion wird mit deaktivertem autonext übernommen.

![Kochen](/docs/img/kbh2-maischplan.jpg)

 Der Brautomat benötigt einen Maischeschritt "Abmaischen", um das Ende vom Maischen und den Übergang zum Läutern zu erkennen. Es sollte in kbh2 Maischplan am Ende ein Schritt Abmaischen vom Typ "Aufheizen" mit 76°C oder höher und einer Dauer von 1 Minute angefügt werden. In dieser Kombination wird Abmaischen vom Brautomat erkannt und mit deaktiviertem autonext eingefügt.

![Kochen](/docs/img/kbh2-maischplan2.jpg)

### Beispiel 1: kbh2 Earl Scheidt Kochmaischverfahren

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Das Kochmaischverfahren von Earl Scheid ist sehr gut mit dem keinenBrauhelfer2 zu planen und mit dem Brautomat sehr einfach automatisiert durchzuführen. Zu beachten gilt, dass zwischen den zwei Teilmaischen ein Maischeschritt Zubrühen (Hauptguss und Malze Teil2) erforderlich ist. Je nach Volumen Malze 2 ist die empfohlene Vorgehensweise mit deaktiviertem autonext für den Schritt Zuberühen zu arbeiten, um ausreichend Zeit für das Einmaischen von Malze 2 zu haben, bevor die zweite Maltoserast beginnt. Alternativ kann als Zieltemperatur im Mischkreuz Hauptguss/Malze 1 zu Hauptguss/Malze 2 ca. 60°C mit direktem (autonext) Aufheizen auf 63°C gewählt werden.

![Beispiel](https://kleiner-brauhelfer.de/docs/programmreiter/rezept/rezept-maischplan.html#variation-das-earlsche-kochmaischverfahren)

### Beispiel 2: kbh2 Dekoktion

Dekoktionsverfahren unterstützt der Brautomat mit halber Automatik. Wenn bspw. eine Teilmaische gezogen wurde, benötigt der Brautomat eine Information (Klick auf Play), wenn dieser Teilschritt abgeschlossen ist. Die Rezepterstellung im kbh2 sowie der Import in den Brautomat erleichtern den Brautag mit Dekoktion. Eine Beschreibung über die Möglichkeiten ist in der Anleitung vom kleinenBrauhelfer2 zu finden.

![Beispiel](https://kleiner-brauhelfer.de/docs/programmreiter/rezept/rezept-maischplan.html#die-dekoktion)

## Der kbh2 Tab Kochen

Aus dem kleinenBrauhelfer2 werden die 5 Hopfengabentypen Vorderwürze, Kochbeginn, Kochen, Kochende und Ausschlagen übernommen und in der benötigten Reihenfolge in den Maischeplan vom Brautomat aufgenommen.

Eine Zeitangabe im kbh2 im Tab Kochen bedeutet "wie lange wird die Hopfengabe gekocht". Aus der Kochdauer ergeben sich u. a. Bittere und Aroma. Siehe hierzu auch die Formelsammlung im kbh2.
Die kbh2 Zeitangabe "wie lange wird die Hopfengabe gekocht" wird beim Import in den Brautomat in eine Zeitangabe "zu welcher Zeit erfolgt die Hopfengabe" umgewandelt.

![Kochen](/docs/img/hopfen.jpg)

### Ein klein wenig hin-und-her rechnen

Im Bild kbh2 ist die Hopfengabe dargestellt. Die erste Hopfengabe ist "Hallertauer Perle 7% 2020" mit einer Kochdauer von 65 Minuten. Ein zweiter Parameter ist in diesem Zusammenhang wichtig: auf der linken Seite ist die gesamte Kochdauer mit 80 Minuten grün markiert. Die Würze wird also 15 Minuten lang ohne Hopfen gekocht. Die zweite Hopfengabe ist der "Hallertauer Tradition 5.7% 2020" Hopfen mit einer Kochdauer von 15 Minuten. In den letzten 15 Minuten Kochen der Würze hat die Hallertauer Perle von ursprünglich 65 Minuten noch 15 Minuten Kochzeit übrig und die zweite Hopfengabe Hallertauer Tradition kocht 15 Minuten lang von den verbliebenen 15 Minuten Restkochzeit mit. Die letze Hopfengabe wird zum Ausschlagen gegeben, also nach dem Kochende.

Die Aufgabe vom Brautomat ist den Zeitpunkt der Hopfengabe beim Brauen anzugeben und am besten mit einem aktustischem Signal an die Hopfenhgabe zu erinnern.

Vorgegeben ist in diesem Beispiel eine gesamte Kochedauer von 80 Minuten und eine erste Hopfengabe "Hallertauer Perle" mit einer Kochdauer von 65 Minuten. Daraus ergibt sich eine Differenz von 15 Minuten Kochdauer ohne Hopfengabe. Der erste Teilschritt Würzekochen hat eine Dauer von 15 Minuten. Jetzt muss die erste Hopfengabe erfolgen. Die zweite Hopfengabe "Hallertauer Tradition 5.7% 2020" hat eine Kochdauer von 15 Minuten. Von den 65 Minuten sind 15 Minuten lang Hallertauer Perle und Hallertauer Tradition zusammen im in der Würze. 65 Minuten abzüglich 15 Minuten ergibt den zeitlichen Abstand der Hopfengaben von 50 Minuten. Die Hopfengabe Hallertauer Perle muss 50 Minuten vor der Hopfengabe Hallertauer Tradition gegeben werden.

Die letzte Hopfengabe "Hallertauer Tradition 5.7% 2020" wird zum Ausschlagen gegeben. Beim Ausschlagen ist das Kochen beendet. Also zählt die Hopfengabe Ausschlagen nicht zur gesamten Kochdauer.

![Kochen](/docs/img/hopfengaben.jpg)

In gleicher Weise verhält sich die Hopfengabe Ausschlagen. Es ist eine Nachisomerisierungszeit von 10 Minuten gegeben. Die Hopfengabe "Hallertauer Tradition 5.7% 2020" zum Ausschlagen mit einer Kochdauer von -5 Minuten ist Teil der Nachisomerisierung.

_Tipp: Werden zwei Hopfengaben zur gleichen Zeit zugegeben, wird die erste Hopfengabenzeit auf 0 Minuten gesetzt und die zweite Hopfengabe auf die tatsächliche Zeit der Zugabe. Die Logik ist nach dem Rechenweg oben einfach: der Abstand zwischen zwei Hopfengaben zum gleichen Zeotpunkt beträgt 0 Minuten._

In gleicher Weise wie die Hopfengaben verhalten sich die Zusätze aus dem kbh2 aus den Tabs Maischen und Kochen. Zusätze aus dem kbh2 Tabs Wasseraufbereitung und Gärung werden nicht unterstützt.
