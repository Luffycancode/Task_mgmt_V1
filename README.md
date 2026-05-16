Task Manager REST API

A structured and scalable RESTful API built using Node.js and Express.js implementing complete CRUD operations with clean routing and controller architecture.

Features
	•	Retrieve all tasks
	•	Retrieve task by ID
	•	Create new tasks
	•	Update existing tasks
	•	Delete tasks
	•	Express middleware integration
	•	Route and controller separation
	•	RESTful API architecture

Tech Stack
	•	Node.js
	•	Express.js
	•	JavaScript

API Endpoints

Method               Endpoint                 Description
GET                  /api/v1/tasks            Get all tasks

GET                  /api/v1/tasks/:id        Get task by ID

POST                 /api/v1/tasks            Create new task

PUT                  /api/v1/tasks/:id        Update task

DELETE               /api/v1/tasks/:id        Delete task


project/
│
├── Controller/
├── Routes/
├── task.json
├── index.js


Concepts
	•	REST API Development
	•	Express Routing
	•	Middleware Handling
	•	CRUD Operations
	•	Request & Response Lifecycle
	•	Route Modularization
	•	Controller-Based Architecture

Future Improvements
	•	MongoDB Integration
	•	Authentication & Authorization
	•	Validation Middleware
	•	Persistent Data Storage
	•	Deployment



Run Locally
->
npm install
node index.js

Make sure to use local server/port
http://localhost:3000


