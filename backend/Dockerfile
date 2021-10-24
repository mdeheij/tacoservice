# Builder image
FROM golang:alpine AS build_base

RUN apk add ca-certificates git
WORKDIR /app
ENV GO111MODULE=on

COPY go.mod .
COPY go.sum .

RUN go mod download -x

# Compilation image
FROM build_base AS server_builder
RUN go version
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -v -a -ldflags="-s -w" -o /go/bin/app .

# Application image without Go to reduce image size
FROM alpine AS app
RUN apk add --no-cache ca-certificates git
ENV GIN_MODE=release
WORKDIR /app

RUN git clone https://github.com/mdeheij/tacofancy.git
# Finally copy statically compiled Go binary.
COPY --from=server_builder /go/bin/app /bin/app

ENTRYPOINT ["/bin/app"]
CMD ["server"]