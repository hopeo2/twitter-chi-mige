"use client";

import { scrapeAndStoreTweets } from "@/lib/actions/index.jsx";
import { FormEvent, useState } from "react";
import Image from "next/image";

const Searchbar = () => {
    const [arr, setArray] = useState([]);
    const [searchPrompt, setSearchPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let urlsearch = `https://nitter.net/${searchPrompt}/with_replies`;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setIsLoading(true);

            //scrape
            const product = await scrapeAndStoreTweets(urlsearch);
            setArray(product);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    const image = `https://nitter.net${arr.proflink}`;
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
                    <h2>fullName={arr.acname}</h2>
                    <Image
                        src={image}
                        width={250}
                        height={250}
                        alt="Picture of the account"
                        className="rounded-full"
                    />
                    {arr.cleanText}
                </div>
            )}
        </>
    );
};

export default Searchbar;
