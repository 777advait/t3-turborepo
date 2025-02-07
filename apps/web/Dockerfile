FROM node:21-slim AS base

# Enable corepack and set up PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set PNPM_HOME to a standard location and add it to PATH
ENV PNPM_HOME=/root/.pnpm
ENV PATH=$PNPM_HOME:$PATH

# setup before install & build
FROM base AS builder

WORKDIR /app

RUN pnpm add -g turbo@2

COPY . .
RUN turbo prune web --docker


# Install deps and build the app
FROM base AS installer

WORKDIR /app

COPY --from=builder /app/out/json .
RUN pnpm install 

COPY --from=builder /app/out/full .
RUN pnpm build

# Run the app
FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public
 
CMD node apps/web/server.js