"use server"

import { scrapeAmazonProduct } from "../scraper/index.jsx";

export async function scrapeAndStoreProduct(productUrl) {
    if(!productUrl) return;
    try {
        const scrapedProduct = await scrapeAmazonProduct(productUrl)
        if(!scrapedProduct) {
            return "can not scrape!";
        }
        return scrapedProduct;
    } catch (error) {
        throw new Error(`faild to create/update product: ${error.message}`)
    }
};