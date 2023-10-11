# Server Side

## Implemented Endpoints

### /
Path | Method | Description
---|---|---
/:code | GET | Get the original URL from shortened URL and redirects to that URL

### /api/url
Path | Method | Description
---|---|---
/api/url | GET | Get the records of all URLs' shortened
/api/url/shorten | POST | Shorten a URL
/api/url/:id | DELETE | Delete the record of a specific URL

