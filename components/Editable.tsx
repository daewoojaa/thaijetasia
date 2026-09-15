"use client";

import type { CSSProperties, ElementType, Ref } from "react";

type EditableProps = {
  defaultValue: string;
  locked: boolean;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
  ref?: Ref<HTMLDivElement | HTMLSpanElement>;
  /** Tags the element with data-field, so a container can read it back by name. */
  field?: string;
};

export default function Editable({
  defaultValue,
  locked,
  as: Tag = "div",
  style,
  className,
  ref,
  field,
}: EditableProps) {
  return (
    <Tag
      ref={ref}
      contentEditable={!locked}
      suppressContentEditableWarning
      className={className}
      style={style}
      data-field={field}
    >
      {defaultValue}
    </Tag>
  );
}
