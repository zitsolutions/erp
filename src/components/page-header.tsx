import { type ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export function PageHeader({ title, subtitle, breadcrumbs, actions }: {
  title: string; subtitle?: string; breadcrumbs?: string[]; actions?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div className="min-w-0">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center text-xs text-muted-foreground mb-1.5">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <ChevronRight className="size-3 mx-1" />}
                <span>{b}</span>
              </span>
            ))}
          </div>
        )}
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  );
}
