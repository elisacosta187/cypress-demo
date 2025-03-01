# Use Node official image
FROM cypress/included:14.1.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the project
COPY . .

# Default command to run Cypress tests headlessly
CMD ["npm", "run", "test"]
