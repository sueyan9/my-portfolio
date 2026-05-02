# Personal Website

A personal portfolio website built with **React + Vite**.  
Live site: https://sueyan.top

[![Netlify Status](https://api.netlify.com/api/v1/badges/09747c0c-9ab4-4a2f-b18d-dd1a9be67f87/deploy-status)](https://app.netlify.com/projects/delightful-muffin-5119dc/deploys)

## Features
- Responsive layout (desktop & mobile)
- Projects / Experience / Contact sections
- Fast build and HMR with Vite
- Portfolio assistant with structured knowledge sources
- Server-side LLM proxy for OpenAI or DeepSeek

## Tech Stack
- React
- Vite
- TypeScript
- Tailwind / Bootstrap

## Portfolio Assistant Setup

The assistant now uses:

- Structured portfolio knowledge files under `shared/portfolioData/`
- A server-side API route at `/api/portfolio-assistant`
- A Netlify Function for production deployment
- A Vite dev middleware so `npm run dev` works locally without exposing API keys to the browser
- Built-in guardrails for token length, rate limiting, and AI shutoff

Create a local `.env` from `.env.example` and set one provider:

- `OPENAI_API_KEY` with optional `OPENAI_MODEL`
- or `DEEPSEEK_API_KEY` with optional `DEEPSEEK_MODEL`

Optional advanced overrides:

- `LLM_PROVIDER=openai|deepseek`
- `LLM_API_KEY`
- `LLM_MODEL`
- `LLM_BASE_URL`
- `AI_ENABLED=true|false`
- `AI_TOTAL_TOKEN_LIMIT=500000`

If no API key is configured, the UI falls back to the local portfolio knowledge base instead of breaking.

## Safety Guardrails

The assistant now includes several simple protections:

- `max_tokens` is capped at `300` per LLM response
- Frontend questions longer than `200` characters are blocked
- A simple in-memory rate limit allows one request per IP every `5` seconds
- `AI_ENABLED=false` can manually disable AI responses at any time
- `AI_TOTAL_TOKEN_LIMIT` stops responses after the in-memory token counter reaches the configured limit

Important note:

- Netlify Functions are stateless, so the simple rate limit and total token counter are best-effort per warm function instance rather than a globally consistent quota system
