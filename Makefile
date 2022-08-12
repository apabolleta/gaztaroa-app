# Makefile

PROJECT_DIR=gaztaroa-app
BUILDS_DIR=site
YARN=yarn
MKDOCS=mkdocs


.PHONY: help install doc start build clean

help:
	@echo "usage: make <target>"
	@echo ""
	@echo "Targets:"
	@echo "help	Show help"
	@echo "install	Install project dependencies"
	@echo "doc	Build project documentation"
	@echo "start	Start the application"
	@echo "build	Build project"
	@echo "clean	Cleans project files"

install:
	@echo "Installing project dependencies..."
	@$(YARN) install --cwd $(PROJECT_DIR)

doc:
	@echo "Building project documentation..."
	@$(MKDOCS) build

start:
	@echo "Starting the application..."
	@$(YARN) --cwd $(PROJECT_DIR) start

build:
	@echo "Building project..."
	@eas login
	@cd $(PROJECT_DIR) && eas build:configure && eas build --platform all


clean:
	@echo "Cleaning project files..."
	@rm -rf $(BUILDS_DIR)
