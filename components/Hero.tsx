import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="wrapper mt-[94px]">
      <div className="bg-[#EEDDCC] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1 space-y-6 max-w-sm">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">
            Your Library
          </h1>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            Convert your books into interactive AI conversations. Listen, learn,
            and discuss your favorite reads.
          </p>
          <Button
            variant="outline"
            className="bg-white text-primary rounded-xl px-6 h-12 text-base font-semibold hover:bg-white/90 border-none shadow-sm mt-2"
          >
            <span className="text-xl mr-2 font-normal">+</span> Add new book
          </Button>
        </div>

        {/* Center Side */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/assets/hero-illustration.png"
            alt="Vintage Books and Globe"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 max-w-sm w-full">
          <div className="bg-white rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0">
                <span className="text-sm font-medium">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Upload PDF</h3>
                <p className="text-muted-foreground text-sm">
                  Add your book file
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0">
                <span className="text-sm font-medium">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary">AI Processing</h3>
                <p className="text-muted-foreground text-sm">
                  We analyze the content
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0">
                <span className="text-sm font-medium">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Voice Chat</h3>
                <p className="text-muted-foreground text-sm">Discuss with AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
