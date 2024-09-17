/**
 * cn Function
cn(...inputs: ClassValue[]):
This function accepts any number of class values (strings, objects, arrays, etc.) as arguments.
It first combines these class values using clsx, which removes any unnecessary or redundant classes.
Then, it passes the result to twMerge to handle any Tailwind-specific class conflicts.
Purpose
The purpose of this function is to simplify the management of CSS class names in a project that uses Tailwind CSS. By combining clsx and twMerge, you can:

Conditionally apply classes.
Avoid duplication.
Resolve Tailwind CSS class conflicts effectively.
 */

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
