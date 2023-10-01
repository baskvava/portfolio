import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

// PUT /api/views/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const parseData = JSON.parse(req.body);
  console.log({ parseData });
  const post = await prisma.portfolio.update({
    where: { id: 1 },
    data: parseData,
  });
  return res.json(post);
}
