import prisma from "@/lib/prisma";

/**
 * A little bit tricky way, but it works now.
 */

export async function GET() {
  const portfolio = await prisma.portfolio.findUnique({
    where: {
      id: 1,
    },
  });

  const newViews = portfolio?.views ?? 10;

  const totalViews = await prisma.portfolio.update({
    where: { id: 1 },
    data: { views: newViews + 1 },
  });

  return Response.json(totalViews);
}
