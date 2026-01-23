import type { JustRelaxData } from "./just-relax-schema";
import { siteConfig } from "../../data/site-config";

/**
 * Source unique de vérité pour toutes les pages.
 * Le contenu est défini dans `data/site-config.ts`,
 * qui lui-même s'appuie sur `data/just-relax.json`.
 */
export const justRelaxData: JustRelaxData = siteConfig;