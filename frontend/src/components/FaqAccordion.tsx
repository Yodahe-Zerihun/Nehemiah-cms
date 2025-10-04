import * as React from "react";
import { FaqItem } from "./FaqItem";
import type { Faq } from "./FaqItem";

type Props = {
  items: Faq[];
  allowMultiple?: boolean; // set true if you want many open at once
};

export default function FaqAccordion({ items, allowMultiple = false }: Props) {
  // single-open (default)
  const [openId, setOpenId] = React.useState<string | null>(null);
  // multi-open option
  const [openSet, setOpenSet] = React.useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    if (!allowMultiple) {
      setOpenId((prev) => (prev === id ? null : id)); // click again retracts
    } else {
      setOpenSet((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    }
  };

  return (
    <div className="divide-y divide-transparent">
      {items.map((item) => {
        const isOpen = allowMultiple ? openSet.has(item.id) : openId === item.id;
        return (
          <FaqItem
            key={item.id}
            {...item}
            isOpen={isOpen}
            onToggle={() => toggle(item.id)}
          />
        );
      })}
    </div>
  );
}
