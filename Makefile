serve:
	export OCTANT_DISABLE_OPEN_BROWSER=true && \
	export OCTANT_LISTENER_ADDR="localhost:7777" && \
	export OCTANT_PROXY_FRONTEND="http://localhost:4200" && \
	go run cmd/octant/main.go
