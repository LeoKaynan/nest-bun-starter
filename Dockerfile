# syntax=docker/dockerfile:1

# ---- Build stage: compile the standalone binary with Bun ----
FROM oven/bun:1.3 AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY . .
RUN bun run build

# ---- Runtime stage: minimal image with just the binary ----
FROM gcr.io/distroless/cc-debian12:nonroot AS runtime
WORKDIR /app

COPY --from=builder --chown=nonroot:nonroot /app/dist/main ./main

ENV PORT=3000
EXPOSE 3000

ENTRYPOINT ["/app/main"]
