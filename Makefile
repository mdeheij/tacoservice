# # import config.
# # You can change the default config with `make cnf="config_special.env" build`
cnf ?= .env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

# # import deploy config
# # You can change the default deploy config with `make cnf="deploy_special.env" release`
# dpl ?= deploy.env
# include $(dpl)
# export $(shell sed 's/=.*//' $(dpl))

# grep the version from the mix file
VERSION=$(shell grep -oP "(?<=version: ).*" charts/tacoservice/Chart.yaml)


# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help


# DOCKER TASKS
# Build the container
build: ## Build the container
	docker build -t $(IMAGE_REPO)/$(APP_NAME)-frontend:$(VERSION) frontend
	docker build -t $(IMAGE_REPO)/$(APP_NAME)-backend:$(VERSION) backend

bump: ## Increment version
	@echo "Current: ${VERSION}"
	@read -p "New version: " NEW \
	&& sed -i "s/^version: .*/version: $${NEW}/" charts/tacoservice/Chart.yaml

run: ## Run container on port configured in `.env`
	docker stop $(APP_NAME)-frontend $(APP_NAME)-backend || echo 
	docker run --rm --env-file=./.env -p=$(BACKEND_PORT):80 --name="$(APP_NAME)-frontend" $(IMAGE_REPO)/$(APP_NAME)-frontend:$(VERSION) &
	docker run -i -t --rm --env-file=./.env -p=$(BACKEND_PORT):8080 --name="$(APP_NAME)-backend" $(IMAGE_REPO)/$(APP_NAME)-backend:$(VERSION)
	docker stop $(APP_NAME)-frontend

up: build run ## Run container on port configured in `config.env` (Alias to run)

stop: ## Stop and remove a running container
	docker stop $(APP_NAME)-backend; docker rm $(APP_NAME)-backend

release: bump build publish

# Docker publish
publish: publish-version

publish-latest:
	@echo 'publish latest to $(IMAGE_REPO)'
	docker push $(IMAGE_REPO)/$(APP_NAME)-frontend:latest
	docker push $(IMAGE_REPO)/$(APP_NAME)-backend:latest

publish-version:
	@echo 'publish latest to $(IMAGE_REPO)'
	docker push $(IMAGE_REPO)/$(APP_NAME)-frontend:$(VERSION)
	docker push $(IMAGE_REPO)/$(APP_NAME)-backend:$(VERSION)
