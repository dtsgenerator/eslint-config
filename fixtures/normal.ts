export function normalizeName(name: string | undefined): string {
  return name?.trim() ?? "";
}
