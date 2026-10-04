#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BIN_DIR="$ROOT/src-tauri/binaries"
VERSION="sf_17.1"
BASE="https://github.com/official-stockfish/Stockfish/releases/download/${VERSION}"
ARCH="$(uname -m)"
OS="$(uname -s)"

mkdir -p "$BIN_DIR"

if [[ "$OS" == "Darwin" && "$ARCH" == "arm64" ]]; then
  ASSET="stockfish-macos-m1-apple-silicon.tar"
  TARGET="stockfish-aarch64-apple-darwin"
elif [[ "$OS" == "Darwin" ]]; then
  ASSET="stockfish-macos-x86-64-avx2.tar"
  TARGET="stockfish-x86_64-apple-darwin"
elif [[ "$OS" == "Linux" ]]; then
  ASSET="stockfish-ubuntu-x86-64-avx2.tar"
  TARGET="stockfish-x86_64-unknown-linux-gnu"
else
  echo "Unsupported platform: $OS $ARCH" >&2
  exit 1
fi

if [[ -x "$BIN_DIR/$TARGET" ]]; then
  echo "Already have $BIN_DIR/$TARGET"
  exit 0
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
echo "Downloading Stockfish 17.1 ($ASSET)…"
curl -L --fail -o "$TMP/sf.tar" "$BASE/$ASSET"
tar -xf "$TMP/sf.tar" -C "$TMP"
FOUND="$(find "$TMP" -type f -name 'stockfish*' ! -name '*.tar' | head -n 1)"
if [[ -z "$FOUND" ]]; then
  echo "Could not find stockfish binary in archive" >&2
  exit 1
fi
cp "$FOUND" "$BIN_DIR/$TARGET"
chmod +x "$BIN_DIR/$TARGET"
xattr -d com.apple.quarantine "$BIN_DIR/$TARGET" 2>/dev/null || true
echo "Installed $BIN_DIR/$TARGET"
