import express from 'express';
import payload from 'payload';
import { config } from 'dotenv';

// Initialize dotenv
config();

// Create express app
const app = express();

// Initialize Payload
const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add CORS middleware for frontend
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  // Add your own express routes here

  app.listen(process.env.PORT || 3000, async () => {
    payload.logger.info(`Server listening on port ${process.env.PORT || 3000}`);
  });
};

start();