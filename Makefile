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
# VERSION=$(shell ./version.sh)


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
	docker build -t $(IMAGE_REPO)/$(APP_NAME)-frontend frontend
	docker build -t $(IMAGE_REPO)/$(APP_NAME)-backend backend

# build-nc: ## Build the container without caching
# 	docker build --no-cache -t $(IMAGE_REPO)/$(APP_NAME) .

run: ## Run container on port configured in `.env`
	docker stop $(APP_NAME)-frontend $(APP_NAME)-backend || echo 
	docker run --rm --env-file=./.env -p=$(BACKEND_PORT):80 --name="$(APP_NAME)-frontend" $(IMAGE_REPO)/$(APP_NAME)-frontend &
	docker run -i -t --rm --env-file=./.env -p=$(BACKEND_PORT):8080 --name="$(APP_NAME)-backend" $(IMAGE_REPO)/$(APP_NAME)-backend
	docker stop $(APP_NAME)-frontend

up: build run ## Run container on port configured in `config.env` (Alias to run)

stop: ## Stop and remove a running container
	docker stop $(APP_NAME)-backend; docker rm $(APP_NAME)-backend

release: build-nc publish ## Make a release by building and publishing the `{version}` ans `latest` tagged containers to ECR

# Docker publish
publish: publish-latest # publish-version ## Publish the `{version}` ans `latest` tagged containers to ECR

publish-latest: ## Publish the `latest` taged container to ECR
	@echo 'publish latest to $(IMAGE_REPO)'
	docker push $(IMAGE_REPO)/$(APP_NAME)-frontend:latest
	docker push $(IMAGE_REPO)/$(APP_NAME)-backend:latest

# publish-version: tag-version ## Publish the `{version}` taged container to ECR
# 	@echo 'publish $(VERSION) to $(DOCKER_REPO)'
# 	docker push $(DOCKER_REPO)/$(APP_NAME):$(VERSION)


# # HELPERS

# # generate script to login to aws docker repo
# CMD_REPOLOGIN := "eval $$\( aws ecr"
# ifdef AWS_CLI_PROFILE
# CMD_REPOLOGIN += " --profile $(AWS_CLI_PROFILE)"
# endif
# ifdef AWS_CLI_REGION
# CMD_REPOLOGIN += " --region $(AWS_CLI_REGION)"
# endif
# CMD_REPOLOGIN += " get-login --no-include-email \)"

# # login to AWS-ECR
# repo-login: ## Auto login to AWS-ECR unsing aws-cli
# 	@eval $(CMD_REPOLOGIN)

# version: ## Output the current version
# 	@echo $(VERSION)
	
