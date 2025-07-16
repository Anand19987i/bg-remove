from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from app.processor import remove_background
from io import BytesIO
import uuid
import os

app = FastAPI()

# Enable CORS (for frontend dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_methods=["*"],
    allow_headers=["*"],
)


from fastapi.staticfiles import StaticFiles
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.post("/remove-bg/")
async def remove_bg(file: UploadFile = File(...)):
    original_bytes = await file.read()
    output_bytes = remove_background(original_bytes)

    # Optional: Save result
    filename = f"{uuid.uuid4()}.png"
    os.makedirs("static", exist_ok=True)
    with open(f"static/{filename}", "wb") as f:
        f.write(output_bytes.getvalue())

    return {
        "filename": filename,
        "url": f"/static/{filename}"
    }


@app.post("/remove-bg-preview/")
async def remove_bg_preview(file: UploadFile = File(...)):
    original_bytes = await file.read()
    output_bytes = remove_background(original_bytes)
    output_bytes.seek(0)
    return StreamingResponse(output_bytes, media_type="image/png")
