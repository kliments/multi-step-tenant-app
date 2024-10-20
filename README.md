# Tenant Application Form

This is a multi-page tenant application form built with React and TypeScript for the frontend. 
TODO: Backend part
The project uses Docker for development and deployment, orchestrated with Docker Compose.

## Features

- Multi-step form for tenant registration with fields for:
  - Full Name
  - Email
  - Phone Number
  - Salary Indication (with predefined ranges)
- Progress indicator to track form completion
- Summary page displaying all user inputs
- Backend API for form submissions

## Technologies Used

- **Frontend**: React, TypeScript, CSS (Tailwind), Docker
- **Backend**: TODO
- **Database**: TODO

## Installation and Running the Project

### Prerequisites

Ensure you have the following installed on your system:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

### Steps to Run

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kliments/tenant-application
   cd tenant-application
   ```

2. **Run the application using Docker Compose**:

   ```bash
   docker-compose up --build
   ```

3. **Access the application**:

   - Frontend: `http://localhost:3000`
   - Backend API: TODO

### File Structure

```
/buena
├── frontend               # Frontend code
│   ├── src                # React components, pages, and state
│   └── Dockerfile         # Docker setup for the frontend
│
├── backend                # Backend code
│   ├── src                # Controllers, models, routes, services
│   └── Dockerfile         # Docker setup for the backend
│
├── docker-compose.yml     # Orchestrates both frontend and backend
└── README.md              # Project documentation
```

## API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| POST   | `/api/tenants`    | Submit tenant form    |

## Future Improvements

- TODO

---