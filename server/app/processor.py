from rembg import remove
from PIL import Image
from io import BytesIO

def remove_background(image_bytes: bytes) -> BytesIO:
    output = remove(image_bytes)
    result_io = BytesIO(output)
    return result_io
