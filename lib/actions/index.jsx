"use server"

import { scrapeTweets } from "../scraper/index.jsx";

export async function scrapeAndStoreTweets(productUrl) {
    if(!productUrl) return;
    try {
        const scrapedProduct = await scrapeTweets(productUrl)
        if(!scrapedProduct) {
            return "can not scrape!";
        }
        return scrapedProduct;
    } catch (error) {
        throw new Error(`faild to create/update product: ${error.message}`)
    }
};