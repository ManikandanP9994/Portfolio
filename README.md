# Manikandan P — Portfolio

Dark cinematic portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and a bottom-right **NVIDIA LLM chatbot**.

## Setup

```bash
npm install
cp .env.example .env.local
```

Add your NVIDIA API key from [build.nvidia.com](https://build.nvidia.com/):

```
NVIDIA_API_KEY=nvapi-...
NVIDIA_MODEL=meta/llama-3.1-8b-instruct
```

Then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The chatbot streams replies from NVIDIA NIM (`https://integrate.api.nvidia.com/v1`).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
