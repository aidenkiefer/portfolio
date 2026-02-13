# Neighbor Expansion Schema Requirement

For neighbor expansion to work fully, the indexing script must store `chunk_index` in the `site_embeddings.metadata` field.

## Required metadata structure:
```json
{
  "chunk_index": 0,  // Sequential index within the document
  "document_id": "uuid",
  "total_chunks": 5  // Optional: total chunks in document
}
```

## Implementation:
The retrieval system will attempt to fetch neighboring chunks (chunk_index ± 1) for expanded context. If chunk_index is not available in metadata, neighbor expansion is skipped gracefully.

## To enable:
Update the indexing script (`scripts/chatbot-index-site.ts` or similar) to populate metadata.chunk_index when creating embeddings.
