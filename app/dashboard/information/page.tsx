'use client'

import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const breadcrumbItems = [
	{ title: 'Dashboard', link: '/dashboard' },
	{ title: 'Information', link: '/dashboard/information' }
  ];
export default function Page() {
	const router = useRouter();
	return (
		<PageContainer>
			<div className="space-y-4">
				<Breadcrumbs items={breadcrumbItems} />
				<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
					Information
				</h2>
				<div className="flex flex-col gap-2 items-start">
					<Button variant="outline"
						onClick={() => {
								router.push("https://www.figma.com/design/pKlE5fPqkX5KvxGY7O63lA/DESPAIR?node-id=0-1&node-type=CANVAS&t=SoKRsxFmytSepgg0-0")
							}}>
							Link on DESPAIR Figma Project
					</Button>
					
				</div>
			</div>
		</PageContainer>
	);
}
