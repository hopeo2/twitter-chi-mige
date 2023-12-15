"use client";

import { scrapeAndStoreProduct } from "@/lib/actions/index.jsx";
import { FormEvent, useState } from "react";

const Searchbar = () => {
    const [arr, setArray] = useState([]);
    const [searchPrompt, setSearchPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let urlsearch = `https://nitter.net/${searchPrompt}/search?f=tweets&q=&e-media=on&e-replies=on&since=&until=&near=`;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setIsLoading(true);

            //scrape
            const product = await scrapeAndStoreProduct(urlsearch);
            setArray(product);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form
                className="flex flex-wrap gap-4 mt-12 justify-center"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={searchPrompt}
                    onChange={(e) => setSearchPrompt(e.target.value)}
                    placeholder="Enter username"
                    className="searchbar-input"
                />

                <button
                    type="submit"
                    className="searchbar-btn"
                    disabled={searchPrompt === ""}
                >
                    {isLoading ? "Searching..." : "Search"}
                </button>
            </form>
            {arr.cleanText && (
                <div className="tweets">
                    {arr.cleanText}
                </div>
            )}
        </>
    );
};

export default Searchbar;
