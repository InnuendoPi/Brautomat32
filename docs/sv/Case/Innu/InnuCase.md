# InnuCase

InnuCase finns i två storlekar. Utskriftsfilerna lagras i mappen Housing/InnuCase.

## Boettform

* InnuCase #1
    > ett större hölje med display, två PWM-moduler och strömbrytare\
    > Strömbrytare för en extern strömförsörjning ESP mikrokontroller\
    > 1x M12 främre LED tryckbrytare, låsning
    > 2x M12 front för ställdon\
    > 2x M12 botten för ställdon\
    > 3x M12 botten för sensorer\
    > Husets mått BxH 26x9cm\
    > Filnamn: InnuCase-1_Display_2PWM_Power.stl\
    ![InnuCase #1](/docs/img/Case-1_Display_2PWM_Power.jpg)\
    > samma hölje med display och två PWM-moduler utan strömbrytare\
    > 2x M12 front för ställdon\
    > 2x M12 botten för ställdon\
    > 3x M12 botten för sensorer\
    > Strömförsörjning ESP mikrokontroller via GGM IDS\
    > Husets mått BxH 26x9cm\
    > Filnamn: InnuCase-1_Display_2PWM.stl\
    ![InnuCase #1](/docs/img/Case-1_Display_2PWM.jpg)

* InnuCase #1 med en PWM-modul
    > InnuCase-1_Display_1PWM_Power.stl\
    ![InnuCase #1](/docs/img/Case-1_Display_1PWM_Power.jpg)\
    > InnuCase-1_Display_1PWM.stl\
    ![InnuCase #1](/docs/img/Case-1_Display_1PWM.jpg)\

* InnuCase #2
    > ett mindre hus med display\
    > 1x M12 botten för sensor\
    > Husets mått BxH 20x9cm\
    > Filnamn: InnuCase-2\
    ![InnuCase #1](/docs/img/Case-2_Display.jpg)

InnuCase #2 är avsedd för en automatisk bakmaskin med display och sensor. Om ingen display används kan displayöppningen stängas med ett blindskydd.

Lämpliga pluggar för M12-hål inkluderar [GX12 Aviation plug](https://www.amazon.de/dp/B0C6SJK1KZ/?coliid=I25GPP716VQUBU&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_6Z58FR08HC6VACCZPY83). GX12 Aviation Sets finns som 2-stift (ställdon), 3-stift (DS18B20) och 4-stift (PT100x).
En lämplig strömbrytare är bland annat en [LED-tryckvakt](https://www.amazon.de/dp/B09WXPJQN3?psc=1&ref=ppx_yo2ov_dt_b_product_details) som låser. InnuCase-1 kan rymma två [PWM-moduler](https://www.amazon.de/dp/B0B7X6Z34Z/?coliid=I1KLJXGJL47O5M&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_56603DDHC44WFNJ0BFM4). Utskärningen för en PWM-modul kan stängas med ett blindskydd.

## Husskydd

* InnuCase #1
    > ett större hölje med display och två PWM-moduler\
    > Lockets mått BxH 26x9cm\
    > Filnamn: InnuCase-1\
    ![InnuCase #1](/docs/img/Deckel-1_Display_2PWM.jpg)
* InnuCase #2
    > ett mindre hus med display\
    > Lockets mått BxH 20x9cm\
    > Filnamn: InnuCase-2\
    ![InnuCase #1](/docs/img/Deckel-2_Display.jpg)

## Husskruvanslutning

Huset har flera dynor för att hålla [gängade insatser](https://www.amazon.de/dp/B0BZVGQ91H/?coliid=I1EM9CS796PWGZ&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_64ER38VQR1H02DJ4WZ4A) för en skruvförbindning. Hålen i dynorna har en diameter på 4,6 mm. Trådinsatserna smälts in i dynans hål med en [lödkolv](https://www.amazon.de/gp/product/B0CDBSGSXY/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1). Gängade insatser M3 är länkade.

![Trådinlägg](/docs/img/Gewindeeinsätze.jpg)

## Kretskorthållare

Kretskortet skruvas fast på en stödplatta. Bärplattan monteras bakom displayen med hjälp av [distanshylsor](https://www.reichelt.de/distanzhuelsen-metall-6-kant-m3-15mm-da-15mm-p7018.html?CCOUNTRY=445&LANGUAGE=de&trstct=pos_0&nbc=1&&r=1). Sexkantiga M3 distanshylsor med en längd på 15 mm är länkade.

![Ombordbärare](/docs/img/Platinenträger-1.jpg) ![Ombordbärare MAX31865](/docs/img/Platinenträger-2.jpg)

Bilden visar 2 kretskortbärare:

* den nedre mindre stödplattan är för automatiska brödmaskiner med DS18B20-sensorer
* den övre, större bärplattan är för automatiska brödmaskiner med PT100x-sensorer (ytterligare hål för 2 MAX31865-brädor)

Bärplattan möjliggör komplett montering i höljet. Inga Brautomat komponenter eller kablar är anslutna till kåpan.

## Fäste

Enkla hållare finns för att fästa höljet. Hållaren skruvas fast på baksidan bakom locket.

![Bracket](/docs/img/Halterung.jpg)

## Blindskydd

Blindskyddet stänger displayöppningen i höljet när ingen display är isatt.

![Blindskydd](/docs/img/Blinddeckel.jpg)

## Bilder

![InnuCase](/docs/img/brautomat_01.jpg)
![InnuCase](/docs/img/brautomat_02.jpg)
