# Makefile

PROJECT_DIR=gaztaroa-app
BUILDS_DIR=site
YARN=yarn
MKDOCS=mkdocs
EAS=eas
JSON=json-server
HOST=127.0.0.1
PORT=3001
DB=db.json


.PHONY: help install doc deploy start serve build clean

help:
	@echo "usage: make <target>"
	@echo ""
	@echo "Targets:"
	@echo "help		Show help"
	@echo "install		Install project dependencies"
	@echo "doc		Build project documentation"
	@echo "deploy		Deploy docs to GitHub Pages"
	@echo "start		Start the application"
	@echo "serve		Serve JSON"
	@echo "build		Build project"
	@echo "clean		Cleans project files"

install:
	@echo "Installing project dependencies..."
	@$(YARN) install --cwd $(PROJECT_DIR)

doc:
	@echo "Building project documentation..."
	@$(MKDOCS) build

deploy:
	@echo "Deploying docs to GitHub Pages..."
	@$(MKDOCS) gh-deploy

start:
	@echo "Starting the application..."
	@$(YARN) --cwd $(PROJECT_DIR) start

serve:
	@echo "Serve JSON..."
	@cd json-server/ && $(JSON) --host $(HOST) $(DB) -p $(PORT)

build:
	@echo "Building project..."
	@$(EAS) login
	@cd $(PROJECT_DIR) && $(EAS) build:configure && $(EAS) build --platform all


clean:
	@echo "Cleaning project files..."
	@rm -rf $(BUILDS_DIR)
