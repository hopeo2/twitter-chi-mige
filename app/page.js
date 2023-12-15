import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel.jsx";
import Searchbar from "@/components/Searchbar.jsx";

const Home = async () => {
    return (
        <>
            <section className="px-6 md:px-20 py-16">
                <div className="flex max-xl:flex-col gap-16 justify-center">
                    <div className="flex flex-col justify-center">
                        <p className="text-xl">
                            start Searching:
                            <Image
                                src="/assets/icons/arrow-right.svg"
                                alt="arrow-right"
                                width={16}
                                height={16}
                            />
                        </p>
                        <h1 className="head-text">
                            give me a
                            <span className="text-primary"> Username</span>
                        </h1>
                        <Searchbar />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
