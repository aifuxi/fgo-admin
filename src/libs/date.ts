import { format } from "date-fns";

export function toYYYYMMDD(date: Date | number) {
  return format(date, "yyyy-MM-dd");
}

export function toModifiedISO8601(date: Date | number) {
  return format(date, "yyyy-MM-dd HH:mm:ss");
}
