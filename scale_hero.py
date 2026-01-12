from PIL import Image
import numpy as np

# First restore the original image
print("Converting original PNG to WebP...")
original = Image.open('/Users/noob1/Downloads/Group 516.png').convert('RGBA')
width, height = original.size
print(f"Original size: {width}x{height}")

# Get background color from corners (average them for accuracy)
corners = [
    original.getpixel((5, 5)),
    original.getpixel((width-5, 5)),
    original.getpixel((5, height-5)),
    original.getpixel((width-5, height-5)),
]
bg_r = sum(c[0] for c in corners) // 4
bg_g = sum(c[1] for c in corners) // 4
bg_b = sum(c[2] for c in corners) // 4
print(f"Average background color: ({bg_r}, {bg_g}, {bg_b})")

# Convert to numpy array
img_array = np.array(original)

# Create a mask for content (non-background pixels)
tolerance = 15
is_bg = (
    (np.abs(img_array[:,:,0].astype(int) - bg_r) < tolerance) &
    (np.abs(img_array[:,:,1].astype(int) - bg_g) < tolerance) &
    (np.abs(img_array[:,:,2].astype(int) - bg_b) < tolerance)
)

# Create alpha mask - content is opaque, background is transparent
alpha_mask = np.where(is_bg, 0, 255).astype(np.uint8)

# Create content-only image with transparency
content_array = img_array.copy()
content_array[:,:,3] = alpha_mask
content_img = Image.fromarray(content_array, 'RGBA')

# Scale down the content
scale_factor = 0.70
new_w = int(width * scale_factor)
new_h = int(height * scale_factor)
scaled_content = content_img.resize((new_w, new_h), Image.LANCZOS)
print(f"Scaled content to {new_w}x{new_h}")

# Create new full-size background
# Sample gradient from original - top to bottom
top_color = original.getpixel((width//2, 20))
mid_color = original.getpixel((width//2, height//2))
bottom_color = original.getpixel((width//2, height-20))

print(f"Gradient: top={top_color[:3]}, mid={mid_color[:3]}, bottom={bottom_color[:3]}")

# Create gradient background using numpy for speed
new_bg = np.zeros((height, width, 3), dtype=np.uint8)
for y in range(height):
    if y < height // 2:
        # Top half: interpolate from top to mid
        ratio = y / (height // 2)
        r = int(top_color[0] * (1 - ratio) + mid_color[0] * ratio)
        g = int(top_color[1] * (1 - ratio) + mid_color[1] * ratio)
        b = int(top_color[2] * (1 - ratio) + mid_color[2] * ratio)
    else:
        # Bottom half: interpolate from mid to bottom
        ratio = (y - height // 2) / (height // 2)
        r = int(mid_color[0] * (1 - ratio) + bottom_color[0] * ratio)
        g = int(mid_color[1] * (1 - ratio) + bottom_color[1] * ratio)
        b = int(mid_color[2] * (1 - ratio) + bottom_color[2] * ratio)
    new_bg[y, :] = [r, g, b]

background = Image.fromarray(new_bg, 'RGB').convert('RGBA')
print("Created gradient background")

# Calculate position to center scaled content (moved up more)
x_offset = (width - new_w) // 2
y_offset = 50  # Position near top

# Paste scaled content onto background
background.paste(scaled_content, (x_offset, y_offset), scaled_content)

# Crop from top and bottom to remove empty space
crop_top = 80
crop_bottom = 180  # Less crop from bottom to add space
final = background.convert('RGB')
cropped = final.crop((0, crop_top, width, height - crop_bottom))
cropped.save('public/projects/aithentic-hero-group.webp', 'WEBP', quality=90)
print(f"Saved scaled hero image (content at {scale_factor*100}%, cropped {crop_bottom}px from bottom)")
