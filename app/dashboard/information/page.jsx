'use client'

import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import despairpic from "../../../public/DESPAIR-KLEYA-LITA.jpg"
import kleya from "../../../public/kleya.jpg"
import lita from "../../../public/lita.jpg"
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [
	{ title: 'Dashboard', link: '/dashboard' },
	{ title: 'Information', link: '/dashboard/information' }
  ];
export default function Page() {
	const router = useRouter();
	return (
		<PageContainer>
			<ScrollArea className="h-screen">
				<div className="space-y-4 flex flex-col">
					<Breadcrumbs items={breadcrumbItems} />
					<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						Information
					</h2>
					<div className="flex flex-col gap-2 pb-32">
						<Button variant="outline"
							onClick={() => {
									router.push("https://www.figma.com/design/pKlE5fPqkX5KvxGY7O63lA/DESPAIR?node-id=0-1&node-type=CANVAS&t=SoKRsxFmytSepgg0-0")
								}}>
								Link on DESPAIR Figma Project
						</Button>
						<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
							68241-08692-44208-11095-27811
						</h4>
						<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
							DESPAIR:
						</h4>
						
						<div className="flex flex-col gap-2">
							<Image src={despairpic}
								width={300}
								height={300}
								alt="Picture of DESPAIR (Kleya and Lita)"
								className="rounded-lg"/>
							<div className="flex flex-row gap-2">
								<Image src={kleya}
									width={300}
									height={300}
									alt="Kleya"
									className="rounded-lg"/>
								<Image src={lita}
									width={300}
									height={300}
									alt="Lita"
									className="rounded-lg"/>
							</div>
						</div>
					</div>
				</div>
			</ScrollArea>
		</PageContainer>
	);
}
