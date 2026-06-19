
import { notFound } from "next/navigation";
import { getAnnouncementById } from "@/lib/localApi/announcement";
import { BackToHomeButton } from "@/components/BackToHomeButton";
import { Metadata } from "next";

type SingleAnnouncementProps = {
  params: Promise<{ id: string }>;
};

type MetadataProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { id } = await params;

  const announcement = getAnnouncementById(Number(id));

  if (!announcement) {
    return {
      title: "Announcement Not Found",
    };
  }

  return {
    title: announcement.title,

    description:
      announcement.description,

    openGraph: {
      title: announcement.title,

      description:
        announcement.description,

      type: "article",

      url: `home/announcements/${id}`,
    },
  };
}

export default async function AnnouncementPage({ params }: SingleAnnouncementProps) {
  const { id } = await params;

  const announcement = getAnnouncementById(Number(id));

  if (!announcement) notFound();

  const Icon = announcement.icon;

  return (
    <div className="container max-w-3xl px-4 py-8 flex flex-col gap-3">
      {/* Back to Feed Button */}
      <BackToHomeButton />

      <div className="overflow-hidden rounded-2xl border border-secondary bg-card shadow-sm transition-all duration-300">

        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3.5">
              <div className="inline-flex items-center justify-center rounded-xl bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                <Icon size={24} />
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                {announcement.title}
              </h1>
            </div>

            <div className="self-start sm:self-center">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {announcement.date}
              </span>
            </div>
          </div>

          <div className="my-6 border-t border-slate-100 dark:border-slate-800" />

          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-base leading-8 text-slate-600 dark:text-slate-300 whitespace-pre-line">
              {announcement.description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}