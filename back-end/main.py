from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import qrcode
import uuid
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

QR_DIR = "qr_codes"
os.makedirs(QR_DIR, exist_ok=True)

@app.post("/generate_qr")
async def generate_qr(content: str = Form(...)):
    filename = f"{uuid.uuid4()}.png"
    filepath = os.path.join(QR_DIR, filename)
    
    img = qrcode.make(content)
    img.save(filepath)
    
    return {"filename": filename}

@app.get("/get_qr/{filename}")
async def get_qr(filename: str):
    filepath = os.path.join(QR_DIR,filename)
    if os.path.exists(filepath):
        return FileResponse(filepath, media_type="image/png")
    return {"error": "QR Code not found"}
