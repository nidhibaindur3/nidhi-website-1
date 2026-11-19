import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

type DetailNavigationProps = {
  backLabel: string;
  onBack: () => void;
  ariaLabel: string;
  children: ReactNode;
};

export function DetailNavigation({
  backLabel,
  onBack,
  ariaLabel,
  children,
}: DetailNavigationProps) {
  return (
    <header className="detail-nav">
      <button type="button" onClick={onBack}>
        <ArrowLeft aria-hidden="true" />
        {backLabel}
      </button>
      <a href="/">Nidhi Baindur</a>
      <nav aria-label={ariaLabel}>{children}</nav>
    </header>
  );
}
