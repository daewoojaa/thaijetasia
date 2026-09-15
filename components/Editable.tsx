"use client";

import type { CSSProperties, ElementType, Ref } from "react";

type EditableProps = {
  defaultValue: string;
  locked: boolean;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
  ref?: Ref<HTMLDivElement | HTMLSpanElement>;
};

export default function Editable({
  defaultValue,
  locked,
  as: Tag = "div",
  style,
  className,
  ref,
}: EditableProps) {
  return (
    <Tag
      ref={ref}
      contentEditable={!locked}
      suppressContentEditableWarning
      className={className}
      style={style}
    >
      {defaultValue}
    </Tag>
  );
}
