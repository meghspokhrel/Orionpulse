from fastapi import FastAPI
from pydantic import BaseModel

from agent import run_orionpulse


app = FastAPI(
    title="OrionPulse Agent API",
    version="1.0.0"
)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str


@app.get("/")
def root():
    return {
        "name": "OrionPulse Agent",
        "status": "online",
        "version": "1.0.0"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    result = run_orionpulse(
        request.message
    )

    return ChatResponse(
        response=result
    )
