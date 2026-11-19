import type { ReactNode } from "react";

type StoryChapterProps = {
  id: string;
  active: boolean;
  className?: string;
  children: ReactNode;
};

export function StoryChapter({
  id,
  active,
  className = "",
  children,
}: StoryChapterProps) {
  return (
    <article
      id={id}
      data-chapter
      data-active={active}
      className={`chapter ${className}`.trim()}
      tabIndex={-1}
    >
      <div className="chapter-frame">
        {children}
      </div>
    </article>
  );
}
