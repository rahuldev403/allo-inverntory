import Image from "next/image";
import { Button } from "./ui/button";
import { sampleBooks } from "@/lib/constants";
import BookCard from "./BookCard";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="wrapper mt-23.5 mb-10 md:mb-16">
      <div className="bg-[#EEDDCC] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1 space-y-6 max-w-sm">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">
            Your Library
          </h1>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            Convert your books into interactive AI conversations. Listen, learn,
            and discuss your favorite reads.
          </p>
          <Link href="/books/new">
            <Button
              variant="outline"
              className="bg-white text-primary rounded-xl px-6 h-12 text-base font-semibold hover:bg-white/90 border-none shadow-sm mt-2 cursor-pointer"
            >
              <span className="text-xl mr-2 font-normal ">+</span> Add new book
            </Button>
          </Link>
        </div>

        {/* Center Side */}
        <div className="flex w-full lg:flex-auto justify-center items-center">
          <Image
            src="/assets/hero-illustration.png"
            alt="Vintage Books and Globe"
            width={500}
            height={500}
            className="object-contain w-full max-w-[350px] lg:max-w-[450px]"
            priority
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full max-w-[320px]">
          <div className="bg-white rounded-xl p-8 space-y-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-semibold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1 text-[17px]">
                  Upload PDF
                </h3>
                <p className="text-muted-foreground text-[15px]">
                  Add your book file
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-semibold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1 text-[17px]">
                  AI Processing
                </h3>
                <p className="text-muted-foreground text-[15px]">
                  We analyze the content
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-semibold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1 text-[17px]">
                  Voice Chat
                </h3>
                <p className="text-muted-foreground text-[15px]">
                  Discuss with AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
