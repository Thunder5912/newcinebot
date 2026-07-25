import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getMovies } from "../lib/sheets";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const movies = await getMovies();

    res.status(200).json({
      success: true,
      total: movies.length,
      movies,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Unable to connect to Google Sheets",
    });
  }
}
