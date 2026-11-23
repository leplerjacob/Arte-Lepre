/**
 * Placeholders ("drafts") are shown in development and on the shareable preview so content gaps
 * are easy to spot, and are left out of the real site build automatically — a production deploy
 * never shows "placeholder" text to customers.
 */
export const showDrafts: boolean = import.meta.env.DEV || import.meta.env.PUBLIC_NOINDEX === "1";
