import { handlePortfolioAssistantRequest } from "../../server/portfolioAssistantHandler.js";

export default async (request) => handlePortfolioAssistantRequest(request, { env: process.env, fetchImpl: fetch });
