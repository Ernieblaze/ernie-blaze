// Shared helpers for config values that start as "TODO_" placeholders and
// should render as disabled/coming-soon until the real value is pasted in.

export function isPlaceholder(value: string) {
  return value.startsWith("TODO_");
}

export function whatsappUrl(value: string) {
  return isPlaceholder(value) ? null : `https://wa.me/${value}`;
}
