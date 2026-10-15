export interface DevelopItem {
    id: number;
    name: string;
    period: string;
    skills: string[];
    detail: string[];
    /** Public paths, ready to use as-is. Empty when the project has no screenshot. */
    images: string[];
    /** 기여도, 0 ~ 100 */
    contribution: number;
    url?: string;
}

export interface PublishItem {
    id: number;
    name: string;
    detail: string;
    /** Empty string when the site is no longer reachable. */
    url: string;
    /** Public paths, ready to use as-is. Empty when the project has no screenshot. */
    images: string[];
    /** Renders the screenshot at mobile proportions. */
    mobile?: boolean;
    /** 기여도, 0 ~ 100 */
    contribution: number;
}
