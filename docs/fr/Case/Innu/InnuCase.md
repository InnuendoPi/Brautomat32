# Le Cas Innu

L'InnuCase est disponible en deux tailles. Les fichiers d'impression sont stockés dans le dossier Housing/InnuCase.

## Forme du boîtier

*InnuCase #1
    > un boîtier plus grand avec écran, deux modules PWM et interrupteur d'alimentation\
    > Interrupteur d'alimentation pour un microcontrôleur ESP d'alimentation externe\
    > 1x Pressostat LED frontal M12, accrochable
    > 2x façade M12 pour actionneurs\
    > 2x fond M12 pour actionneurs\
    > 3x fond M12 pour capteurs\
    > Dimensions du boîtier LxH 26x9cm\
    > Nom du fichier : InnuCase-1_Display_2PWM_Power.stl\
    ![InnuCase #1]([[CHEMIN_0]])\
    > même boîtier avec afficheur et deux modules PWM sans interrupteur d'alimentation\
    > 2x façade M12 pour actionneurs\
    > 2x fond M12 pour actionneurs\
    > 3x fond M12 pour capteurs\
    > Alimentation du microcontrôleur ESP via GGM IDS\
    > Dimensions du boîtier LxH 26x9cm\
    > Nom du fichier : InnuCase-1_Display_2PWM.stl\
    ![InnuCase #1](/docs/img/Case-1_Display_2PWM.jpg)

* InnuCase #1 avec un module PWM
    > InnuCase-1_Display_1PWM_Power.stl\
    ![InnuCase #1]([[CHEMIN_2]])\
    > InnuCase-1_Display_1PWM.stl\
    ![InnuCase #1]([[CHEMIN_3]])\

*InnuCase #2
    > un boîtier plus petit avec affichage\
    > 1x fond M12 pour capteur\
    > Dimensions du boîtier LxH 20x9cm\
    > Nom du fichier : InnuCase-2\
    ![InnuCase #1](/docs/img/Case-2_Display.jpg)

L'InnuCase #2 est destinée à une machine à pain automatique dotée d'un afficheur et d'un capteur. Si aucun écran n'est utilisé, l'ouverture de l'écran peut être fermée avec un couvercle aveugle.

Les connexions enfichables appropriées pour les trous M12 incluent [Fiche aviation GX12](https://www.amazon.de/dp/B0C6SJK1KZ/?coliid=I25GPP716VQUBU&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_6Z58FR08HC6VACCZPY83). Les ensembles GX12 Aviation sont disponibles en version 2 broches (actionneurs), 3 broches (DS18B20) et 4 broches (PT100x).
Un interrupteur d'alimentation approprié est, entre autres, un [pressostat LED](https://www.amazon.de/dp/B09WXPJQN3?psc=1&ref=ppx_yo2ov_dt_b_product_details) à verrouillage. L'InnuCase-1 peut accueillir deux [Modules PWM](https://www.amazon.de/dp/B0B7X6Z34Z/?coliid=I1KLJXGJL47O5M&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_56603DDHC44WFNJ0BFM4). La découpe pour un module PWM peut être fermée avec un couvercle aveugle.

## Couverture du logement

*InnuCase #1
    > un boîtier plus grand avec afficheur et deux modules PWM\
    > Dimensions du couvercle LxH 26x9cm\
    > Nom du fichier : InnuCase-1\
    ![InnuCase #1](/docs/img/Deckel-1_Display_2PWM.jpg)
*InnuCase #2
    > un boîtier plus petit avec affichage\
    > Dimensions du couvercle LxH 20x9cm\
    > Nom du fichier : InnuCase-2\
    ![InnuCase #1](/docs/img/Deckel-2_Display.jpg)

## Raccordement à vis du boîtier

Le boîtier comporte plusieurs patins pour maintenir les [inserts filetés](https://www.amazon.de/dp/B0BZVGQ91H/?coliid=I1EM9CS796PWGZ&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_64ER38VQR1H02DJ4WZ4A) pour un raccordement à vis. Les trous des patins ont un diamètre de 4,6 mm. Les inserts filetés sont fondus dans le trou du tampon à l'aide d'un [fer à souder](https://www.amazon.de/gp/product/B0CDBSGSXY/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1). Les inserts filetés M3 sont liés.

![Insertions de fil](/docs/img/Gewindeeinsätze.jpg)

## Support de circuit imprimé

Le circuit imprimé est vissé sur une plaque support. La plaque de support est montée derrière l'écran à l'aide de [manchons d'espacement](https://www.reichelt.de/distanzhuelsen-metall-6-kant-m3-15mm-da-15mm-p7018.html?CCOUNTRY=445&LANGUAGE=de&trstct=pos_0&nbc=1&&r=1). Des douilles entretoises hexagonales M3 d'une longueur de 15 mm sont reliées.

![Support de carte](/docs/img/Platinenträger-1.jpg) ![Support de carte MAX31865](/docs/img/Platinenträger-2.jpg)

La figure montre 2 supports de circuits imprimés :

* la petite plaque de support inférieure est destinée aux machines à pain automatiques avec capteurs DS18B20
* la plaque de support supérieure, plus grande, est destinée aux machines à pain automatiques avec capteurs PT100x (trous supplémentaires pour le maintien de 2 planches MAX31865)

La plaque support permet un montage complet dans le boîtier. Aucun composant ou câble Brautomat n'est fixé au couvercle du boîtier.

## Support

Des supports simples sont disponibles pour fixer le boîtier. Le support est vissé au dos derrière le couvercle.

![Support](/docs/img/Halterung.jpg)

## Couverture aveugle

Le couvercle aveugle ferme l'ouverture d'affichage dans le boîtier lorsqu'aucun écran n'est inséré.

![Couverture aveugle](/docs/img/Blinddeckel.jpg)

## Images

![InnuCase](/docs/img/brautomat_01.jpg)
![InnuCase](/docs/img/brautomat_02.jpg)
