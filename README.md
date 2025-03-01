# ⏯️ Demo - Cypress

This project contains automated UI tests for SauceDemo, a demo e-commerce site.

## How to setup the project

### Clone the repository

SSH

```
git clone https://github.com/elisacosta187/cypress-demo.git
```

HTTPS

```
git clone git@github.com:elisacosta187/cypress-demo.git
```

### Install dependencies

```
npm install
```

### Run all tests

```
yarn cypress test
```

## Makefile commands

| Command                   | Description                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------- |
| `build`                   | Buid docker containers.                                                            |
| `up`                      | Start the containers in detached mode.                                             |
| `down`                    | Stop and remove containers.                                                        |
| `test`                    | Run Cypress tests.                                                                 |
| `clean`                   | Clean up Docker resources (stopped containers, networks, volumes).                 |
| `shell`                   | Execute a shell inside the running container.                                      |

## Useful links

[Cypress documentation](https://docs.cypress.io/app/get-started/why-cypress)
