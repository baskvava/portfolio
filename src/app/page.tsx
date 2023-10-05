import prisma from "@/lib/prisma";
import Wrapper from "./components/wrapper";

export default async function Home() {
  // const portfolio = await prisma.portfolio.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // });

  return (
    <div className="relative flex flex-col justify-start bg-background items-center min-h-screen w-full">
      <Wrapper />
    </div>
  );
}
