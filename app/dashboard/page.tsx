import { auth } from "@/auth";
import PageContainer from "@/components/layout/page-container";

export default async function Page() 
{
  const session = await auth()
  return (
    <PageContainer>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Welcome back, <a className="text-indigo-500">{session?.user?.name}!</a>
        </h2>
    </PageContainer>
  );
}