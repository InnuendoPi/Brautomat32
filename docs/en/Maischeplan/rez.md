# Mash plan settings

The Brauomat offers simple management of mash plans. In addition to importing and exporting, you can switch between saved mash plans. Time control is also possible. This chapter concludes the description of the basic functions.

## Mash plan

The name of the mash plan can be defined in the settings. The file name is derived from the mash plan name. The parameters *total boiling time* and *post-isomerisation time* are only displayed for information and cannot be edited. These parameters are read in during recipe import. If a mash plan is created manually, the boiling time and post-isomerisation time values are irrelevant as the Brauomat does not calculate bittering units.

## Time control

A bridal day can be planned and started automatically with the help of time control.

![Time control](/docs/img/Time-control.jpg)

The DateTimerPicker element can be used to select a date and time very easily. The recipe name is temporarily replaced by the specified start time.

![Timer](/docs/img/Timer2.jpg)

An activated time control is saved in the configuration. When the Brautomat is restarted, the set date and time are read in. If this brewing start is in the future, the time control is activated. If the brewing start is in the past, the time control is deactivated.

## Manage mash plans

### Create mash plan

Enter the name of the mash plan in the input field. Press *OK* to create a new empty mash plan.

### Rename mash plan

Enter the new name for the mash plan in the input field. Press *OK* to save the mash plan under the new name.

### Change mash plan

The Brauomat manages mash plans in the flash memory. By selecting *Change mash plan*, you can switch between the existing mash plans.

### Import mash plan

The selected mash plan is deleted from the flash memory.\
The Brautomat can import brewing recipes from the following sources:

* kleinerBrauhelfer2 (from version 2.5 export type Brautomat)
* MaischMaluundmehr
* Brewfather
* Brautomat

An imported brewing recipe becomes a Brautomat mash plan. Recipe management and creation with kbh2 is recommended. The ‘Brauomat’ export filter contains all the data required for brewing with the Brauomat in optimised form.

Recipes from MaischeMalzundMehr should also first be imported into the smallBrauhelfer2 and adapted to the individual system values, raw materials etc. As MMum does not assign rest names, it is recommended to edit them in the KBH2 mash plan.

Recipes from BrewFather must assign an integer value to the boilTime property. A value for the parameter Equipment -> whirlpoolTime is also recommended. Brew names in BrewFather can contain a continuous text of (almost any) length. The text is shortened to a maximum of 50 characters. Brewfather allows floating point numbers and text as a rest time. The parameters are converted to integers or set to 0.

*Note: The ESP microcontrollers have a small RAM memory. Recipes with very long texts, images or other attachments may not be able to be imported. Images and very long descriptions should be removed before importing.

Imported recipes are saved in the /Recipes folder. The recipe name is used as the file name. The maximum length of the file name in the Arduino file system is 31 characters. Spaces and umlauts are replaced when saving.

### Export mash plan

A mash plan can be exported in JSON format. The import in Brautomat format must be used to read it back in.

### Remove mash plan

The selected mash plan is removed from the flash memory.

## Import default setting

![Preset import](/docs/img/preset_import.jpg)

The Brauomat requires a mash-in step (optional) and a mash-out step. If ‘autonext’ is deactivated, the mashing step in particular serves as a separation step between mashing and boiling. When importing, the Brauomat can insert missing mashing-in and mashing-off steps. Missing temperatures can also be specified.

### Temperature specifications for missing parameters

Temperature specifications may be missing in recipes from various sources. This applies in particular to the temperatures for mashing in, mashing out, front wort and whirlpool hopping. The internal programme logic of the Brautomat always requires a temperature for processing, even if some temperatures are not necessary from the brewer's point of view. Missing temperatures are preset with default values.

### Mashing-in temperature [°C]

This parameter is for the recipe import and describes the standard temperature for mashing in. This parameter is only used if no mashing-in temperature is specified during recipe import.

### Mashing temperature [°C]

This parameter is for the recipe import and describes the standard temperature for mashing down. This parameter is only used if no mashing temperature is specified in the recipe import.

### Temperature VWH [°C]

This parameter is for the recipe import and describes the standard temperature for hopping a front wort. Often no temperature is specified for the VWH in recipes. A temperature specification is required for the Brautomat. If a temperature is specified in the recipe, this is used for the import.

### Temperature WPH [°C]

This parameter is for the recipe import and describes the standard temperature for whirlpool hopping. Often no temperature is specified for the WPH in recipes. A temperature specification is required for the Brautomat. If a temperature is specified in the recipe, this is used for the import.

### Boiling temperature [°C]

This parameter describes the temperature from which the wort boils. The default value is 98°C and corresponds approximately to a location 500 metres above sea level. This parameter is used as the boiling temperature for the recipe import.
