#!/usr/bin/env bash
set -euo pipefail

# Slices the team cards from the composite PNG into individual front images.
# This makes a first-pass cut using approximate coordinates. We can refine
# the offsets easily by editing the numbers below and re-running.

# Detect ImageMagick command (magick or convert)
if command -v magick >/dev/null 2>&1; then
  IM="magick"
elif command -v convert >/dev/null 2>&1; then
  IM="convert"
else
  echo "Error: ImageMagick not found. Please install ImageMagick (brew install imagemagick)." >&2
  exit 1
fi

SRC="assets/Warp Eng Team.png"
FRONT_OUT="assets/fronts"
AVATAR_OUT="assets/avatars"
mkdir -p "$FRONT_OUT" "$AVATAR_OUT"

# Global image size (we measured earlier)
IMG_W=3368
IMG_H=531

# Common geometry assumptions
COL_W=673           # approx IMG_W / 5
PAD_X=60            # inner horizontal padding within each team column
PAD_Y_TOP=70        # space for the team heading inside each column
ROW_H=100           # height of a single card slice
ROW_G=20            # vertical gap between rows

# Derived Y positions for 4 rows per column
ROW1_Y=$PAD_Y_TOP
ROW2_Y=$((PAD_Y_TOP + ROW_H + ROW_G))
ROW3_Y=$((PAD_Y_TOP + 2*(ROW_H + ROW_G)))
ROW4_Y=$((PAD_Y_TOP + 3*(ROW_H + ROW_G)))

# X bases for each team column (left to right)
X_CODE=10
X_AGENTS=$((X_CODE + COL_W))
X_REVENUE=$((X_AGENTS + COL_W))
X_QUALITY=$((X_REVENUE + COL_W))
X_WARP3=$((X_QUALITY + COL_W))

# Widths for one-column vs two-column sections
GAP_INNER=40
TWOCOL_W=$(( (COL_W - 2*PAD_X - GAP_INNER) / 2 ))  # each of the two inner columns
ONECOL_W=$(( COL_W - 2*PAD_X ))

# Helper function: crop WxH+X+Y to OUT
crop() {
  local w=$1 h=$2 x=$3 y=$4 out=$5
  "$IM" "$SRC" -crop ${w}x${h}+${x}+${y} +repage "$out"
  echo "w=${w} h=${h} x=${x} y=${y} -> $out"
}

# Helper to make an avatar from the left of a given card rect
avatar_from_card() {
  local card_x=$1 card_y=$2 out=$3
  local pad=8
  local side=$(( ROW_H - 2*pad ))
  local x=$(( card_x + pad ))
  local y=$(( card_y + pad ))
  crop $side $side $x $y "$out"
}

# Code (two inner columns × 4 rows)
C1_X=$((X_CODE + PAD_X))
C2_X=$((C1_X + TWOCOL_W + GAP_INNER))

crop $TWOCOL_W $ROW_H $C1_X $ROW1_Y "$FRONT_OUT/code-aloke-d.png"
crop $TWOCOL_W $ROW_H $C2_X $ROW1_Y "$FRONT_OUT/code-kevin-c.png"
avatar_from_card $C1_X $ROW1_Y "$AVATAR_OUT/code-aloke-d.png"
avatar_from_card $C2_X $ROW1_Y "$AVATAR_OUT/code-kevin-c.png"

crop $TWOCOL_W $ROW_H $C1_X $ROW2_Y "$FRONT_OUT/code-abhi-p.png"
crop $TWOCOL_W $ROW_H $C2_X $ROW2_Y "$FRONT_OUT/code-kevin-y.png"
avatar_from_card $C1_X $ROW2_Y "$AVATAR_OUT/code-abhi-p.png"
avatar_from_card $C2_X $ROW2_Y "$AVATAR_OUT/code-kevin-y.png"

crop $TWOCOL_W $ROW_H $C1_X $ROW3_Y "$FRONT_OUT/code-pei.png"
crop $TWOCOL_W $ROW_H $C2_X $ROW3_Y "$FRONT_OUT/code-lucie-l.png"
avatar_from_card $C1_X $ROW3_Y "$AVATAR_OUT/code-pei.png"
avatar_from_card $C2_X $ROW3_Y "$AVATAR_OUT/code-lucie-l.png"

crop $TWOCOL_W $ROW_H $C1_X $ROW4_Y "$FRONT_OUT/code-moira-h.png"
crop $TWOCOL_W $ROW_H $C2_X $ROW4_Y "$FRONT_OUT/code-jordan-p.png"
avatar_from_card $C1_X $ROW4_Y "$AVATAR_OUT/code-moira-h.png"
avatar_from_card $C2_X $ROW4_Y "$AVATAR_OUT/code-jordan-p.png"

# Agents (two inner columns × 4 rows; last row only left slice used)
A1_X=$((X_AGENTS + PAD_X))
A2_X=$((A1_X + TWOCOL_W + GAP_INNER))

crop $TWOCOL_W $ROW_H $A1_X $ROW1_Y "$FRONT_OUT/agents-advait-m.png"
crop $TWOCOL_W $ROW_H $A2_X $ROW1_Y "$FRONT_OUT/agents-zach-b.png"
avatar_from_card $A1_X $ROW1_Y "$AVATAR_OUT/agents-advait-m.png"
avatar_from_card $A2_X $ROW1_Y "$AVATAR_OUT/agents-zach-b.png"

crop $TWOCOL_W $ROW_H $A1_X $ROW2_Y "$FRONT_OUT/agents-roland-h.png"
crop $TWOCOL_W $ROW_H $A2_X $ROW2_Y "$FRONT_OUT/agents-ben-h.png"
avatar_from_card $A1_X $ROW2_Y "$AVATAR_OUT/agents-roland-h.png"
avatar_from_card $A2_X $ROW2_Y "$AVATAR_OUT/agents-ben-h.png"

crop $TWOCOL_W $ROW_H $A1_X $ROW3_Y "$FRONT_OUT/agents-david-s.png"
crop $TWOCOL_W $ROW_H $A2_X $ROW3_Y "$FRONT_OUT/agents-harry-a.png"
avatar_from_card $A1_X $ROW3_Y "$AVATAR_OUT/agents-david-s.png"
avatar_from_card $A2_X $ROW3_Y "$AVATAR_OUT/agents-harry-a.png"

crop $TWOCOL_W $ROW_H $A1_X $ROW4_Y "$FRONT_OUT/agents-maggie-s.png"
avatar_from_card $A1_X $ROW4_Y "$AVATAR_OUT/agents-maggie-s.png"

# Revenue (one column × 4 rows)
R_X=$((X_REVENUE + PAD_X))

crop $ONECOL_W $ROW_H $R_X $ROW1_Y "$FRONT_OUT/revenue-jeff-l.png"
crop $ONECOL_W $ROW_H $R_X $ROW2_Y "$FRONT_OUT/revenue-andrew-s.png"
crop $ONECOL_W $ROW_H $R_X $ROW3_Y "$FRONT_OUT/revenue-tyler-l.png"
crop $ONECOL_W $ROW_H $R_X $ROW4_Y "$FRONT_OUT/revenue-andy-c.png"

avatar_from_card $R_X $ROW1_Y "$AVATAR_OUT/revenue-jeff-l.png"
avatar_from_card $R_X $ROW2_Y "$AVATAR_OUT/revenue-andrew-s.png"
avatar_from_card $R_X $ROW3_Y "$AVATAR_OUT/revenue-tyler-l.png"
avatar_from_card $R_X $ROW4_Y "$AVATAR_OUT/revenue-andy-c.png"

# Quality (one column × 4 rows)
Q_X=$((X_QUALITY + PAD_X))

crop $ONECOL_W $ROW_H $Q_X $ROW1_Y "$FRONT_OUT/quality-suraj-g.png"
crop $ONECOL_W $ROW_H $Q_X $ROW2_Y "$FRONT_OUT/quality-daniel-p.png"
crop $ONECOL_W $ROW_H $Q_X $ROW3_Y "$FRONT_OUT/quality-matt-a.png"
crop $ONECOL_W $ROW_H $Q_X $ROW4_Y "$FRONT_OUT/quality-lili.png"

avatar_from_card $Q_X $ROW1_Y "$AVATAR_OUT/quality-suraj-g.png"
avatar_from_card $Q_X $ROW2_Y "$AVATAR_OUT/quality-daniel-p.png"
avatar_from_card $Q_X $ROW3_Y "$AVATAR_OUT/quality-matt-a.png"
avatar_from_card $Q_X $ROW4_Y "$AVATAR_OUT/quality-lili.png"

# Warp 3 (one column × 2 rows)
W3_X=$((X_WARP3 + PAD_X))

crop $ONECOL_W $ROW_H $W3_X $ROW1_Y "$FRONT_OUT/warp3-ben-n.png"
crop $ONECOL_W $ROW_H $W3_X $ROW2_Y "$FRONT_OUT/warp3-ian-h.png"

avatar_from_card $W3_X $ROW1_Y "$AVATAR_OUT/warp3-ben-n.png"
avatar_from_card $W3_X $ROW2_Y "$AVATAR_OUT/warp3-ian-h.png"

echo "Done. Review the slices in $FRONT_OUT and avatars in $AVATAR_OUT. If any crops look off, tweak PAD_X, PAD_Y_TOP, ROW_H, ROW_G, GAP_INNER."

