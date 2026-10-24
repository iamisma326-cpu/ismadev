"""
Genera un avatar circular (PNG con esquinas transparentes y borde anti-aliased)
a partir de src/assets/isma.png, listo para usar en el email HTML.
Resultado: public/avatar-email.png (200x200, se muestra a 72px en el email)
"""
from PIL import Image, ImageDraw
import os

SRC = "src/assets/isma.png"
OUT = "public/avatar-email.png"
SIZE = 200   # resolución final del avatar
ZOOM = 1.04  # recorte interior para eliminar el halo del borde del recorte original

img = Image.open(SRC).convert("RGBA")
w, h = img.size
print(f"Imagen original: {w}x{h}")

# 1) Fondo blanco sólido (los emails se ven sobre fondos claros)
white = Image.new("RGBA", img.size, (255, 255, 255, 255))
img = Image.alpha_composite(white, img)

# 2) Recorte cuadrado centrado en el rostro.
#    La foto es horizontal: el cuadrado toma casi la altura completa,
#    con ZOOM=1.04 metido hacia adentro para evitar remanentes del borde.
face_cx = 0.46                       # centro horizontal aproximado del rostro
side = int(h / ZOOM)                 # lado del cuadrado (ligero zoom-in)
top = int(h * 0.02)                  # margen respirable sobre el pelo
top = min(top, h - side)
left = max(0, min(w - side, int(w * face_cx - side / 2)))
square = img.crop((left, top, left + side, top + side))

# 3) Escalar al tamaño final
square = square.resize((SIZE, SIZE), Image.LANCZOS)

# 4) Máscara circular anti-aliased (dibujada a x4 y reducida)
ss = SIZE * 4
mask = Image.new("L", (ss, ss), 0)
ImageDraw.Draw(mask).ellipse((0, 0, ss - 1, ss - 1), fill=255)
mask = mask.resize((SIZE, SIZE), Image.LANCZOS)

out = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
out.paste(square, (0, 0), mask)
out.save(OUT, optimize=True)

print(f"Avatar generado: {OUT} ({os.path.getsize(OUT) / 1024:.0f} KB, {SIZE}x{SIZE}, circular)")
