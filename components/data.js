import { parseISO, format } from "date-fns";

const FORMAT = "LLLL d, yyyy";
export function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, FORMAT)}</time>;
}
