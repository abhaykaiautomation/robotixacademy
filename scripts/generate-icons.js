// Generates PWA icons as PNG files — no external dependencies, uses only Node built-ins
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

// Brand purple #6C3CE1 = rgb(108, 60, 225)
const BG = { r: 108, g: 60, b: 225 };
// White for the robot drawing
const FG = { r: 255, g: 255, b: 255 };
// Orange accent #FF6B35
const ACC = { r: 255, g: 107, b: 53 };

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++)
      crc = crc & 1 ? (0xedb88320 ^ (crc >>> 1)) : crc >>> 1;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const t = Buffer.from(type);
  const crcVal = Buffer.alloc(4);
  crcVal.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crcVal]);
}

function createPNG(size) {
  const pixels = [];
  const cx = size / 2;
  const cy = size / 2;
  const s = size / 512; // scale factor

  function inRect(x, y, rx, ry, rw, rh, radius) {
    if (x < rx || x >= rx + rw || y < ry || y >= ry + rh) return false;
    // rounded corners check
    const dx = Math.min(x - rx, rx + rw - 1 - x);
    const dy = Math.min(y - ry, ry + rh - 1 - y);
    if (dx < radius && dy < radius) {
      return (dx - radius) ** 2 + (dy - radius) ** 2 < radius ** 2;
    }
    return true;
  }

  function inCircle(x, y, cx, cy, r) {
    return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2;
  }

  for (let y = 0; y < size; y++) {
    // filter byte
    pixels.push(0);
    for (let x = 0; x < size; x++) {
      let col = BG;

      // Rounded icon background (95% of size)
      const margin = size * 0.025;
      const iconR = size * 0.18;
      if (!inRect(x, y, margin, margin, size - 2 * margin, size - 2 * margin, iconR)) {
        col = BG; // still bg, transparent handled by browser
      }

      // Robot head
      const hx = cx - 90 * s, hy = cy - 140 * s, hw = 180 * s, hh = 130 * s;
      if (inRect(x, y, hx, hy, hw, hh, 22 * s)) col = FG;

      // Eyes (orange)
      if (inCircle(x, y, cx - 45 * s, cy - 85 * s, 22 * s)) col = ACC;
      if (inCircle(x, y, cx + 45 * s, cy - 85 * s, 22 * s)) col = ACC;
      // Eye shine
      if (inCircle(x, y, cx - 40 * s, cy - 90 * s, 8 * s)) col = FG;
      if (inCircle(x, y, cx + 50 * s, cy - 90 * s, 8 * s)) col = FG;

      // Smile
      for (let t = 0; t <= 1; t += 0.01) {
        const sx = cx - 55 * s + 110 * s * t;
        const sy = cy - 30 * s + Math.sin(t * Math.PI) * 20 * s;
        if (inCircle(x, y, sx, sy, 7 * s)) col = ACC;
      }

      // Antenna
      if (inRect(x, y, cx - 5 * s, hy - 55 * s, 10 * s, 55 * s, 3 * s)) col = FG;
      if (inCircle(x, y, cx, hy - 58 * s, 14 * s)) col = ACC;

      // Body
      const bx = cx - 115 * s, by = cy - 5 * s, bw = 230 * s, bh = 140 * s;
      if (inRect(x, y, bx, by, bw, bh, 18 * s)) col = FG;

      // Chest panel
      if (inRect(x, y, cx - 70 * s, cy + 10 * s, 140 * s, 80 * s, 10 * s)) {
        col = { r: 200, g: 180, b: 255 };
      }
      // Chest buttons
      if (inCircle(x, y, cx - 30 * s, cy + 45 * s, 12 * s)) col = ACC;
      if (inCircle(x, y, cx + 30 * s, cy + 45 * s, 12 * s)) col = { r: 0, g: 201, b: 167 };

      // Legs
      if (inRect(x, y, cx - 95 * s, by + bh, 65 * s, 75 * s, 12 * s)) col = FG;
      if (inRect(x, y, cx + 30 * s, by + bh, 65 * s, 75 * s, 12 * s)) col = FG;

      pixels.push(col.r, col.g, col.b);
    }
  }

  const raw = Buffer.from(pixels);
  const compressed = zlib.deflateSync(raw);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 2;  // RGB color type

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG signature
    chunk("IHDR", ihdr),
    chunk("IDAT", compressed),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const sizes = [72, 96, 128, 144, 152, 180, 192, 384, 512];
const outDir = path.join(__dirname, "../public/icons");

for (const size of sizes) {
  const png = createPNG(size);
  const file = path.join(outDir, `icon-${size}x${size}.png`);
  fs.writeFileSync(file, png);
  console.log(`✓ Generated ${file}`);
}
console.log("All icons generated!");
