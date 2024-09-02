'use client'

import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";

const breadcrumbItems = [
	{ title: 'Dashboard', link: '/dashboard' },
	{ title: 'Users', link: '/dashboard/users' }
  ];

export default function Page() {

	return (
		<PageContainer>
			<div className="space-y-4">
				<Breadcrumbs items={breadcrumbItems} />
				<div className="flex flex-col gap-0 pb-2">
					<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
						Users
					</h2>
					<p className="text-sm text-muted-foreground">Total users</p>
				</div>
			</div>
		</PageContainer>
	);
}
