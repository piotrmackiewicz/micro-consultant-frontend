import { ExpertProfileResponseDto } from "@/lib/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export const getExperts = async (): Promise<ExpertProfileResponseDto[]> => {
  const expertsUrl = new URL("/expert", API_BASE_URL).toString();

  const response = await fetch(expertsUrl, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to load experts (status: ${response.status})`);
  }

  return response.json() as Promise<ExpertProfileResponseDto[]>;
};
