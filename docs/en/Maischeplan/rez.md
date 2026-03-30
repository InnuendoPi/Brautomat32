# Mash plan settings

The Brautomat offers easy management of mash plans. You can import, export, rename, switch and delete plans. This chapter completely describes the basic functions.

## Mash plan

The name of the mash plan can be specified in the settings. The file name is derived from the mash plan name. The *Total cooking time* and *Post-isomerization time* parameters are displayed for information only and cannot be edited. These parameters are read in during recipe import. If a mash plan is created manually, the cooking time and post-isomerization values are irrelevant because the Brautomat does not calculate bitter units.

### Create mash plan

The name of the mash plan must be entered in the input field. With *OK* a new empty mash plan is created.

### Rename mash plan

The new name for the mash plan must be entered in the input field. With *OK* the mash plan is saved under the new name.

### Change mash plan

The Brautomat manages mash plans in flash memory. By selecting *Change mash plan* you can switch between the existing mash plans.

### Import mash plan

The Brautomat can import brewing recipes from the following sources:

* kleinerBrauhelfer2 (from version 2.5 export type Brautomat)
* MaischeMalzundMehr
* BrewFather
* Brautomat

An imported brewing recipe becomes a Brautomat mash plan. Recipe management and creation with KBH2 is recommended. The export filter `Brautomat` contains all data required for brewing with the Brautomat in an optimized form.

Recipes from MaischeMalzundMehr should also first be imported into kleinerBrauhelfer2 and adapted to your individual setup values, ingredients, and similar parameters. Since MMum does not assign step names, editing in the KBH2 mash plan is recommended.

Recipes and brews can be imported from BrewFather via file import or via API call. Step names can be very long in BrewFather; the Brautomat shortens them to a maximum of 50 characters. Step times from floating point numbers or text are converted to integers or set to 0 during import. A maximum of 300 recipes or brews are loaded via the BrewFather API.

*Important (from 1.60):* Recipe import, renaming, copying, changing and deleting are only permitted in the idle state. These actions are blocked during an active brewing process.

*Note:* ESP microcontrollers have limited RAM. Recipes with very long text, images or other attachments may fail to import. The Brautomat filters recipes before import. Even so, it may still be necessary to remove images and very long descriptions before importing.

Imported recipes are saved in the `/Rezepte` folder. The recipe name is used as the file name. The maximum file name length in the Arduino file system is 31 characters. Spaces and umlauts are replaced when saving.

### Export mash plan

A mash plan can be exported in JSON format. To import it again, the Brautomat format must be used.

### Remove mash plan

The selected mash plan is removed from flash memory.

## Import defaults

![Import default](/docs/img/voreinstellung_import.jpg)

The Brautomat requires a mash-in step (optional) and a mash-out step. In particular, the mash-out step serves as a separator between mashing and boiling when `autonext` is disabled. During import, the Brautomat can insert missing mash-in and mash-out steps. In addition, missing temperatures can be filled with defaults.

### Temperature defaults for missing parameters

Recipes from different sources may be missing temperature information. This applies in particular to mash-in, mash-out, front wort and whirlpool hopping temperatures. The internal program logic of the Brautomat always requires a temperature for processing, even if some temperatures are not necessary from the brewer's point of view. Missing temperatures are filled with default values.

### Mash-in temperature [°C]

This parameter is used during recipe import and describes the default mash-in temperature. It is only used if the recipe import does not provide a mash-in temperature.

### Mash-out temperature [°C]

This parameter is used during recipe import and describes the default mash-out temperature. It is only used if the recipe import does not provide a mash-out temperature.

### VWH temperature [°C]

This parameter is used during recipe import and describes the default temperature for front wort hopping. Recipes often do not provide a temperature for VWH. A temperature value is required by Brautomat. If the recipe already specifies a temperature, that recipe value is used.

### WPH temperature [°C]

This parameter is used during recipe import and describes the default temperature for whirlpool hopping. Recipes often do not provide a temperature for WPH. A temperature value is required by Brautomat. If the recipe already specifies a temperature, that recipe value is used.

### Boil temperature [°C]

This parameter describes the default temperature for boil steps during recipe import. The default value is 100°C. If the recipe already defines a boil temperature, that recipe value is used.
