from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from qdrant_client import QdrantClient, models

app = FastAPI()

# CORS for React dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def connect_qdrant():
    """Connect to Qdrant Cloud"""
    try:
        client = QdrantClient(
            url="https://71cc6272-375c-4d4c-bdf6-d395f077e063.europe-west3-0.gcp.cloud.qdrant.io:6333", 
            api_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.rhjtxRG7yF6vHVxb9ZzuphzSa60hhlc7x_goMhY0iII"
        )
        return client
    except Exception as e:
        print(f"Qdrant connection failed: {e}")
        return None

@app.get("/")
def read_root():
    client = connect_qdrant()
    if client:
        return {"message": "Connected", "status": "success"}
    else:
        return {"message": "Not Connected", "status": "error"}

@app.get("/collection/all")
def fetch_all_data():
    """Fetch all data from collection as JSON"""
    try:
        client = connect_qdrant()
        if not client:
            raise HTTPException(status_code=500, detail="Cannot connect to Qdrant")
            
        points, _ = client.scroll(
            collection_name="audio_kb",
            limit=1000,
            with_payload=True,
            with_vectors=False
        )
        
        result = {
            "status": "success",
            "collection": "audio_kb",
            "total_points": len(points),
            "data": []
        }
        
        for point in points:
            item = {
                "id": point.id,
                "payload": point.payload or {}
            }
            result["data"].append(item)
        
        return result
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/collection/tag/{tag}")
def fetch_by_tag(tag: str):
    """Fetch data by tag"""
    try:
        client = connect_qdrant()
        if not client:
            raise HTTPException(status_code=500, detail="Cannot connect to Qdrant")
            
        points, _ = client.scroll(
            collection_name="audio_kb",
            scroll_filter=models.Filter(
                must=[models.FieldCondition(
                    key="tag", 
                    match=models.MatchValue(value=tag)
                )]
            ),
            limit=1000,
            with_payload=True,
            with_vectors=False
        )
        
        result = {
            "status": "success",
            "collection": "audio_kb",
            "filter": f"tag={tag}",
            "total_points": len(points),
            "data": []
        }
        
        for point in points:
            item = {
                "id": point.id,
                "payload": point.payload or {}
            }
            result["data"].append(item)
        
        return result
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Run with: uvicorn main:app --reload