from fastapi import FastAPI, Request
from pydantic import BaseModel
from nlp_engine import handle_query

app = FastAPI()

class Query(BaseModel):
    message: str

@app.post("/chat")
def chat(query: Query):
    response = handle_query(query.message)
    return {"response": response}

@app.get("/")
def root():
    return {"message": "Chatbot is running."}
