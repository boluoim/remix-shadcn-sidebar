import type { MetaFunction } from "@remix-run/node";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar";
import { Skeleton } from "~/components/ui/skeleton";

export const meta: MetaFunction = () => {
  return [
    { title: "Tiny CMS" },
    { name: "description", content: "Manage your content, unified" },
  ];
};

export default function Index() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-12 md:grid-cols-3">
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
              </div>
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted md:min-h-min" />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
