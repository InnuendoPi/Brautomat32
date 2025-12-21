# Mash plan settings

The Brautomat offers easy management of mash plans. In addition to importing and exporting, you can switch between saved mash plans. Time control is also possible. This chapter completes the description of the basic functions.

## Mash plan

The name of the mash plan can be specified in the settings. The file name is derived from the mash plan name. The *Total cooking time* and *Post-isomerization time* parameters are displayed for information only and cannot be edited. These parameters are read in during the recipe import. If a mashing plan is created manually, the cooking time and post-isomerization values ​​are irrelevant because the Brautomat does not calculate bitter units.

## Time control

With the help of time control, a bridal day can be planned and started automatically.

![Time control](/docs/img/Zeitsteuerung.jpg)

With the DateTimerPicker element you can easily select a date and time. The recipe name is temporarily replaced by the specified start time.

![Time control](/docs/img/Zeitsteuerung2.jpg)

An activated time control is saved in the configuration. When the brewing machine is restarted, the set date and time are read in. If this brewing start is in the future, the time control is activated. If the brewing start is in the past, the time control is deactivated.

## Manage mash plans

### Create mash plan

The name of the mash plan must be entered in the input field. With *OK* a new empty mash plan is created.

### Rename mash plan

The new name for the mash plan must be entered in the input field. With *OK* the mash plan is saved under the new name.

### Change mash plan

The Brautomat manages mash plans in flash memory. By selecting *Change mash plan* you can switch between the existing mash plans.

### Import mash plan

The Brautomat can import brewing recipes from the following sources:

* KleinBrauhelfer2 (from version 2.5 export type Brautomat)
* Mash malt and more
* Brewfather
* Brautomat

An imported brewing recipe becomes a Brautomat mash plan. Recipe management and creation with kbh2 is recommended. The export filter "Brautomat" contains in an optimized form all the data required for brewing with the Brautomat.

Recipes from MashMalzandMore should also first be imported into the small brewing aid2 and adapted to the individual system values, raw materials, etc. Since MMum does not assign rest names, it is recommended to edit it in the KBH2 mash plan.

Recipes and brews can be imported from BrewFather via file import or via API call. In BrewFather, rest names can contain a body text (of almost any length). The text is shortened to a maximum of 50 characters. Brewfather allows floating point numbers and text as rest time. The parameters are converted to integers or set to 0.

*Note: The ESP microcontrollers have a small amount of RAM. Recipes with very long text, images or other attachments may not be able to be imported. The Brautomat filters recipes before import. However, it may be necessary to remove images and very long descriptions before importing.

Imported recipes are saved in the /Recipes folder. The recipe name is used as the file name. The maximum length of the file name in the Arduino file system is 31 characters. Spaces and umlauts are replaced when saving.

### Export mash plan

A mash plan can be exported in JSON format. To read it again, the import must be used in Brautomat format.

### Remove mash plan

The selected mash plan is removed from flash memory.

## Import default

![Import default](/docs/img/voreinstellung_import.jpg)

The Brautomat requires a mashing step (optional) and a mashing step. InIn particular, the mashing step serves as a separating step between mashing and cooking when autonext is deactivated. When importing, the Brautomat can insert missing mashing and mashing steps. In addition, missing temperatures can be provided with specifications.

### Temperature defaults for missing parameters

Recipes from different sources may, among other things, be missing temperature information. This applies in particular to the temperatures for mashing in, mashing off, front wort and whirlpool hopping. The brewer's internal program logic always requires a temperature for processing, even if some temperatures are not necessary from the brewer's perspective. Missing temperatures are preassigned with default values.

### Mashing temperature [°C]

This parameter is for recipe import and describes the default temperature for mashing. This parameter is only used if no mashing temperature is specified during the recipe import.

### Mashing temperature [°C]

This parameter is for recipe import and describes the default temperature for mashing. This parameter is only used if no mashing temperature is specified during the recipe import.

### Temperature VWH [°C]

This parameter is for recipe import and describes the standard temperature for a front wort hopping. Recipes often do not specify a temperature for the VWH. A temperature specification is required for Brautomat. If a temperature is specified in the recipe, this will be used during import.

### Temperature WPH [°C]

This parameter is for recipe import and describes the default temperature for whirlpool hopping. Recipes often do not specify a temperature for the WPH. A temperature specification is required for Brautomat. If a temperature is specified in the recipe, this will be used during import.

### Cooking temperature [°C]

This parameter describes the temperature at which the wort boils to a rolling boil. The standard value is 98°C and corresponds approximately to a location at 500m above sea level. For the recipe import, this parameter is used as the cooking temperature.
