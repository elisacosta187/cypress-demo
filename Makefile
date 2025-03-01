# Build the Docker containers
build:
	docker-compose build

# Start the containers in detached mode
up:
	docker-compose up -d

# Stop and remove containers
down:
	docker-compose down

# Run Cypress tests
test:
	docker-compose up --exit-code-from cypress

# Clean up Docker resources (stopped containers, networks, volumes)
clean:
	docker system prune -af --volumes

# Open a shell inside the Cypress container
shell:
	docker-compose run --rm cypress sh
