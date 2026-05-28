"use client";

import Image from "next/image";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <main className="w-full flex-col min-h-screen pb-20 pt-20 lg:pt-24 bg-white">
      {/* Top Banner Section */}
      <section className="w-full bg-[#F4EBE2] border-t border-b border-[#e1d5c7] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 py-10 md:py-16 flex flex-col md:flex-row justify-between relative min-h-[400px]">
          {/* Banner Left Content */}
          <div className="w-full md:w-[55%] flex flex-col justify-center items-start z-10 pt-4 md:pt-0">
            <h1 className="text-[3rem] md:text-[4.5rem] font-serif text-[#382110] mb-8 leading-[1.05]">
              Talk to your books. <br />
              Learn faster.
            </h1>
            <SignUpButton mode="modal" forceRedirectUrl="/">
              <Button className="rounded-full px-8 py-5 text-base font-semibold bg-[#382110] hover:bg-[#2a180c] text-white">
                Discover more
              </Button>
            </SignUpButton>
          </div>

          {/* Banner Illustrations */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-between items-center z-0">
            {/* Left Illustration */}
            <div className="w-[400px] h-[300px] flex items-center justify-center opacity-30 -translate-x-12 translate-y-10">
              <Image
                src="/assets/left1.png"
                alt="Bookshelf illustration"
                width={400}
                height={300}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            {/* Right Illustration */}
            <div className="w-[300px] h-[350px] hidden md:flex items-center justify-center opacity-30 mr-[400px] -translate-y-4">
              <Image
                src="/assets/right.png"
                alt="Library corner illustration"
                width={300}
                height={350}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Floating Auth Card */}
          <div className="w-full md:w-95 bg-white rounded-lg shadow-xl p-8 z-20 flex flex-col md:absolute md:-top-4 md:right-6 lg:right-0 mt-12 md:mt-0">
            <h2 className="text-[22px] font-serif text-center mb-6 text-[#181818]">
              Discover & read more
            </h2>

            <div className="space-y-3 mb-6">
              <SignUpButton mode="modal" forceRedirectUrl="/">
                <Button className="w-full bg-[#f4d17f] hover:bg-[#ecd059] text-[#111111] py-6 shadow-none text-[15px]">
                  Continue with Google
                </Button>
              </SignUpButton>

              <SignUpButton mode="modal" forceRedirectUrl="/">
                <Button className="w-full bg-[#382110] hover:bg-[#2a180c] text-white py-6 text-[15px] shadow-none">
                  Sign up with email
                </Button>
              </SignUpButton>
            </div>

            <p className="text-[11px] text-center text-[#767676] mb-6 leading-[1.6]">
              By creating an account, you agree to listner's-key{" "}
              <a href="#" className="text-[#00635d] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#00635d] hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            <div className="pt-4 border-t border-[#e8e8e8] text-center">
              <span className="text-[13px] text-[#333333]">
                Already a member?{" "}
              </span>
              <SignInButton mode="modal" forceRedirectUrl="/">
                <button className="text-[13px] text-[#00635d] hover:underline font-semibold">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Text Features Section */}
      <section className="max-w-[1240px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
          <div>
            <h3 className="text-[20px] font-bold mb-4 text-[#181818]">
              Upload your PDF
            </h3>
            <p className="text-[#181818] leading-[1.6] text-[14px]">
              We'll parse it and prepare it for interactive chat. Talk to an AI
              assistant grounded natively in your material.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-bold mb-4 text-[#181818]">
              Voice conversations
            </h3>
            <p className="text-[#181818] leading-[1.6] text-[14px]">
              Speak naturally while you learn. Get explanations, summaries, and
              quick recall on any book you upload without typing a word.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Content Grid */}
      <section className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row gap-8 items-start">
        {/* Features Widget */}
        <div className="w-full bg-[#f4f1ea] rounded-xl p-8 border border-[#e6e2d6]">
          <h3 className="text-[18px] mb-6 text-[#181818]">
            What will <span className="italic font-serif">you</span> discover?
          </h3>

          <div className="flex flex-wrap items-center gap-x-[20px] gap-y-6">
            <div className="flex flex-col gap-3">
              <span className="text-[13px] text-[#181818]">
                Start with a book...
              </span>
              <div className="flex gap-[12px]">
                <div className="w-[100px] h-[155px] flex items-center justify-center shadow-md">
                  <Image
                    src="/assets/cover.png"
                    alt="Book cover"
                    width={100}
                    height={155}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-[#d8d8d8] font-bold mx-2 text-3xl">➔</div>

            <div className="flex flex-col gap-3">
              <span className="text-[13px] text-[#181818]">
                Ask a question...
              </span>
              <div className="flex gap-[12px]">
                <div className="w-[200px] h-[155px] bg-[#c1def0] border border-[#a8c9e0] flex items-center justify-center shadow-md p-4">
                  <span className="text-[14px] text-[#497592] font-semibold text-center leading-relaxed">
                    "Can you summarize the main argument of chapter 3?"
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[#d8d8d8] font-bold mx-2 text-3xl">➔</div>

            <div className="flex flex-col gap-3">
              <span className="text-[13px] text-[#181818]">
                Get an answer instantly.
              </span>
              <div className="flex gap-[12px]">
                <div className="w-[250px] h-[155px] bg-[#e3eed4] border border-[#c2dcb0] flex flex-col items-center justify-center shadow-md p-4 space-y-4">
                  <span className="text-[14px] text-[#4a6b32] font-semibold text-center leading-relaxed">
                    "Certainly! Chapter 3 argues that..."
                  </span>
                  <span className="text-[11px] text-[#6d8a59] font-medium text-center leading-tight border border-[#6d8a59] rounded-full px-3 py-1">
                    Audio Transcript Placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
