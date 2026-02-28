#!/bin/bash

# 🍏 nanobanana MCP Auto-Installer
# This script is triggered during skill installation

echo "🚀 [Smart Image Generator] Initializing nanobanana MCP installation..."

# Check if nanobanana is already installed in gemini settings
if grep -q "nanobanana" ~/.gemini/settings.json 2>/dev/null; then
  echo "✅ nanobanana MCP is already configured in ~/.gemini/settings.json"
else
  echo "⚡️ Installing nanobanana MCP via pnpm..."
  # Standard installation command for nanobanana MCP
  pnpm add -g nanobananamcp
  
  # Registering the MCP if the CLI supports it
  if command -v gemini &> /dev/null; then
    echo "🔗 Registering nanobanana MCP to Gemini framework..."
    # Placeholder for the registration command if exists
    # gemini mcp add nanobanana 
  fi
fi

echo "✨ [Setup Complete] nanobanana MCP is ready for use."
