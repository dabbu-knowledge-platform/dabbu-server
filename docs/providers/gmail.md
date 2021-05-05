# Gmail

### Provider specific fields

- Requires an access token of the format `Bearer <token>` in the `Authorization` header of every request. No fields need to be added to the request body.

### Provider specific features

- Labels are treated as folders
- Multiple labels can be specified (as nested folders) to search for threads with **all** the mentioned labels
- Threads are files
- The thread ID is used to get a thread and all its messages
- When getting a specific thread, the provider will create a zip file containing all messages in the thread, along with any inline images and attachments. The messages will be converted to markdown if in html.