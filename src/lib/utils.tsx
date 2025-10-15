/* use tailwind merge to combine className */
import {clsx} from 'clsx';
import {twMerge} from "tailwind-merge";

/* cn function created to pass a list of classNames */
export const cn = (...inputs:any[]) => {
    return twMerge(clsx(inputs));
};