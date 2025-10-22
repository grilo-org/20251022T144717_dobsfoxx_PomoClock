import { format } from "date-fns";

export default function formatDate(timestamp: number){
    const date = new Date(timestamp);
    return format(date, 'dd/MM/yyyy HH:mm');
}