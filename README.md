# Doctor Consultation Platform

## Overview

This project is an **Online Doctor Consultation Platform** that allows patients to book appointments, consult with doctors, and receive prescriptions. The backend is built using **NestJS**, **MongoDB**, **Redis**, and integrates JWT authentication, email notifications, and AWS storage.

## Features

- **User Authentication** (Patients, Doctors, and Admins)
- **Appointment Booking System**
- **Real-time Notifications using Redis**
- **JWT-based Authentication and Role-based Access**
- **Email Integration using SMTP**
- **AWS S3 for Profile Image Storage**
- **Google OAuth for Authentication**

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+ recommended)
- **MongoDB** (Local or Cloud instance)
- **Redis** (Use Redis Cloud Console for better performance)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Krishnadas7/doctor-consultation.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd doctor-consultation
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Create a ****`.env`**** file** in the root directory and add the following environment variables:

   ```env
   MONGODB_URI=

   REDIS_HOST=
   REDIS_PORT=
   REDIS_USERNAME=
   REDIS_PASSWORD=

   JWT_ACCESS_SECRET=
   JWT_REFRESH_SECRET=
   JWT_ADMIN_ACCESS_SECRET=
   JWT_ADMIN_REFRESH_SECRET=
   JWT_DOCTOR_ACCESS_SECRET=
   JWT_DOCTOR_REFRESH_SECRET=

   EMAIL_SERVICE=
   EMAIL_USER=
   EMAIL_PASS=

   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=

   BASE_URL=
   FRONTEND_URL=

   AWS_BUCKET_NAME=
   AWS_BUCKET_REGION=
   AWS_ACCESS_KEY=
   AWS_SECRET_KEY=
   ```

   **Note:** Ensure that you replace the values with your actual credentials.

5. **Start the application:**

   ```sh
   npm run start
   ```

## Connecting to Redis

For better performance, use **Redis Cloud Console** to manage your Redis instance. Update your `.env` file with the correct Redis credentials.

## Running in Docker (Optional)

To run the application using **Docker**, ensure Docker is installed and run:

```sh
docker-compose up --build
```

## API Documentation

API documentation will be available at:

```
http://localhost:3000
```

