import { ExpertProfileResponseDto } from "@/lib/types";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiBaseUrl) {
  throw new Error(
    "Environment variable NEXT_PUBLIC_API_URL is not set. Please define it to point to the backend API base URL.",
  );
}

export const getExperts = async (): Promise<ExpertProfileResponseDto[]> => {
  const expertsUrl = new URL("/expert", apiBaseUrl).toString();

  const response = await fetch(expertsUrl, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to load experts (status: ${response.status})`);
  }

  return response.json() as Promise<ExpertProfileResponseDto[]>;
};
