start: dev

dev:
	docker-compose -f ./0compose/docker-compose.dev.yml up -d $(filter-out $@,$(MAKECMDGOALS:start=))

dev-build:
	docker-compose -f ./0compose/docker-compose.dev.yml up -d --build $(filter-out $@,$(MAKECMDGOALS:start=))

stop:
	docker-compose -f ./0compose/docker-compose.dev.yml stop

rm:
	docker-compose -f ./0compose/docker-compose.dev.yml stop
	docker-compose -f ./0compose/docker-compose.dev.yml rm -f

logs:
	docker-compose -f ./0compose/docker-compose.dev.yml logs -f $(filter-out $@,$(MAKECMDGOALS))

exec:
	./0compose/docker-compose-exec.sh $(filter-out $@,$(MAKECMDGOALS)) bash
