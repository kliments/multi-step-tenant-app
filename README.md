# Tenant Application Form

This is a multi-page tenant application form built with React and TypeScript for the frontend. The backend is built with NestJS, providing a robust API for form submissions. The project uses Docker for development and deployment, orchestrated with Docker Compose.

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
- **Backend**: NestJS, TypeORM, PostgreSQL
- **Database**: PostgreSQL

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

2. **Environment configuration**:

   Create a `.env` file in the backend folder and copy the contents of `.env.example` to it.

3. **Run the application**:

   ```bash
   docker-compose up --build
   ```

3. **Access the application:**

   Frontend: http://localhost:3000
   Backend API: http://localhost:3001/api/tenants

4. **Stop the application:**

   ```bash
   docker-compose down
   ```

5. **Run tests:**

   ```bash
   docker-compose -f docker-compose.test.yml up --build
   ```

6. **Stop tests:**

   ```bash
   docker-compose -f docker-compose.test.yml down
   ```

### File Structure

   ```
   /tenant-application
   ├── frontend               # Frontend code
   │   ├── src                # React components, pages, and state
   │   └── Dockerfile         # Docker setup for the frontend
   │   └── Dockerfile.test    # Docker setup for the frontend tests
   ├── backend                # Backend code
   │   ├── src                # Controllers, models, routes, services
   │   └── Dockerfile         # Docker setup for the backend
   │   └── Dockerfile.test    # Docker setup for the backend tests
   ├── docker-compose.yml     # Orchestrates both frontend and backend
   ├── docker-compose.test.yml # Orchestrates both frontend and backend tests
   └── README.md              # Project documentation
   ```
## API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| POST   | `/api/tenants`   | Submit tenant form    |

## Future Improvements

- Add user authentication for secure submissions
- Enhance the backend with additional endpoints for tenant management
- Global error handling and user feedback
- Dashboards for administrators to view submission statistics and trends
- Improve API documentation, using Swagger or similar tools
- Set up a CI/CD pipeline for automated testing and deployment
