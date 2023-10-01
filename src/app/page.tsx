import prisma from "@/lib/prisma";
import Wrapper from "./wrapper";

export default async function Home() {
  const portfolio = await prisma.portfolio.findUnique({
    where: {
      id: 1,
    },
  });
  console.log({ portfolio });
  return (
    <div className="flex flex-col justify-start bg-background items-center min-h-screen w-full">
      {portfolio?.views ? <Wrapper views={2} /> : <></>}
    </div>
  );
}
