import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

export async function scrapeAmazonProduct(url) {
    if (!url) return;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }
        const html = await response.text();
        const dom = new JSDOM(html);
        const parsed = new Readability(dom.window.document).parse();
        let cleanText = parsed?.textContent || "";

        cleanText = cleanText
            .trim()
            .replace(/(\n){4,}/g, "\n\n\n")
            .replace(/\n\n/g, " ")
            .replace(/ {3,}/g, "  ")
            .replace(/\t/g, "")
            .replace(/\d/g, "")
            .replace(/\n+(\s*\n)*/g, "\n");
        
        const data = {
            cleanText
        }
        return data;
    } catch (error) {
        throw new Error(`faild to scrape product:${error.message}`);
    }
}
