Overview

This project provides a RESTful API for managing sales transactions, generating statistical insights, and visualizing data through bar and pie charts. It integrates multiple endpoints to retrieve and combine data from different sources.

Features

Fetch sales transaction data

Generate statistics for total sales amount, sold items, and unsold items

Provide bar chart data for sales insights

Provide pie chart data for category-wise sales

Seed database with initial data

Combine responses from transaction, bar chart, and pie chart APIs into a single JSON response

Technologies Used

Node.js

Express.js

MongoDB with Mongoose

Axios

Recharts (for frontend visualization)

Installation

Clone the repository:

https://github.com/nitinmagar/MERN_Sales_Analytics.git

Install dependencies:

npm install

Start the server:
nodemon server.js

start application:
npm start

Or using nodemon for development:

npm run dev

API Endpoints

1. Seed Database

GET /api/seed

Seeds the database with initial data.

2. Fetch Transactions

GET /api/transactions?month={month}&search={search}&page={page}&perPage={perPage}

Retrieves transaction data based on filters.

3. Get Statistics

GET /api/statistics?month={month}

Provides total sales amount, sold items, and unsold items count.

4. Get Bar Chart Data

GET /api/bar-chart?month={month}

Returns data formatted for a bar chart visualization.

5. Get Pie Chart Data

GET /api/pie-chart?month={month}

Returns data formatted for a pie chart visualization.

6. Get Combined Data

GET /api/combined-data?month={month}

Fetches data from transactions, bar chart, and pie chart APIs and returns a combined response.
