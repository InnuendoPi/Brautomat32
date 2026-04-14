# Brautomat32 ServiceTool

Brautomat32 ServiceTool is the desktop companion for Brautomat32 devices.

It provides:

- configuration backup and restore
- firmware flashing and firmware backup
- web files update
- WiFi provisioning
- inventory management for recipes, fermenter plans, and profiles
- serial monitor
- migration workflow for partition/layout changes
- optional local test-runner integration

## End-User Distribution

Brautomat32 ServiceTool is distributed as a complete desktop application.

A bundled `esptool` copy is included with the packaged end-user builds.
If no bundled copy is available in the current runtime environment, the tool downloads a matching `esptool` version automatically on first use.

## End-User Start

### Windows

1. Create any directory for the ServiceTool.
2. Copy `Brautomat32ServiceTool.exe` into that directory.
3. Start the executable.

### Linux

1. Create any directory for the ServiceTool.
2. Copy `Brautomat32ServiceTool.AppImage` into that directory.
3. Make it executable:

```bash
chmod +x Brautomat32ServiceTool.AppImage
```

4. Start it:

```bash
./Brautomat32ServiceTool.AppImage
```

### macOS

1. Extract `Brautomat32ServiceTool-macos.zip`.
2. Move `Brautomat32ServiceTool.app` into any directory.
3. Start the app bundle.
4. The packaged app opens the local UI in the browser on `http://127.0.0.1:<port>`.
   By default the tool uses port `8765`. If that port is already in use, it selects a free local port automatically.
5. If macOS shows `Brautomat32ServiceTool is damaged and can't be opened`, remove the quarantine attribute once in Terminal:

```bash
xattr -dr com.apple.quarantine /path/to/Brautomat32ServiceTool.app
```

6. If macOS still blocks the first start, open the app once via Finder using `Open` and confirm the security prompt.
7. The app bundle can stay in `Downloads`, but writable runtime data is stored separately in:

```text
~/Library/Application Support/Brautomat32ServiceTool
```

Typical runtime folders created there are `logs`, `cache`, `backups`, and `inventar`.

## Runtime Layout

The application serves static files from the bundled `static` directory.

At runtime it separates application files from writable data:

- bundled application files stay inside the packaged app location
- bundled `esptool` is resolved relative to the packaged app location
- writable runtime data is stored in a dedicated data directory

Runtime data includes:

- `backups`
- `logs`
- `cache`
- `inventar`
- `config.json`

Runtime data location:

- Windows packaged app: next to the executable
- Linux AppImage: `~/.local/share/Brautomat32ServiceTool`
- macOS app bundle: `~/Library/Application Support/Brautomat32ServiceTool`
- source run: next to `app.py`

These runtime folders are intentionally excluded from git.

## End-User Requirements

- network access for GitHub downloads when firmware packages or tools are fetched dynamically
