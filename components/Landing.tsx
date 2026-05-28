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
              The Big Books <br />
              of Summer <br />
              (and Beyond!)
            </h1>
            <Button className="rounded-full px-8 py-5 text-base font-semibold bg-[#382110] hover:bg-[#2a180c] text-white">
              Discover more
            </Button>
          </div>

          {/* Banner Illustrations Placeholders */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-between items-center z-0">
            {/* Left Illustration Placeholder */}
            <div className="w-[400px] h-[300px] flex items-center justify-center opacity-30 -translate-x-12 translate-y-10">
              <div className="w-full h-full border-4 border-dashed border-[#cdae90] rounded-[50px] flex items-center justify-center">
                <span className="text-xl font-bold text-[#b49271]">
                  Illustration
                  <br />
                  Placeholder
                </span>
              </div>
            </div>
            {/* Right Illustration Placeholder */}
            <div className="w-[300px] h-[350px] hidden md:flex items-center justify-center opacity-30 mr-[400px] -translate-y-4">
              <div className="w-full h-full border-4 border-dashed border-[#cdae90] rounded-[100px] flex items-center justify-center">
                <span className="text-xl font-bold text-[#b49271]">
                  Illustration
                  <br />
                  Placeholder
                </span>
              </div>
            </div>
          </div>

          {/* Floating Auth Card */}
          <div className="w-full md:w-95 bg-white rounded-lg shadow-xl p-8 z-20 flex flex-col md:absolute md:-top-4 md:right-6 lg:right-0 mt-12 md:mt-0">
            <h2 className="text-[22px] font-serif text-center mb-6 text-[#181818]">
              Discover & read more
            </h2>

            <div className="space-y-3 mb-6">
              <SignUpButton mode="modal">
                <Button className="w-full bg-[#f4d17f] hover:bg-[#ecd059] text-[#111111] py-6 shadow-none text-[15px]">
                  Continue with Google
                </Button>
              </SignUpButton>

              <SignUpButton mode="modal">
                <Button className="w-full bg-[#382110] hover:bg-[#2a180c] text-white py-6 text-[15px] shadow-none">
                  Sign up with email
                </Button>
              </SignUpButton>
            </div>

            <p className="text-[11px] text-center text-[#767676] mb-6 leading-[1.6]">
              By creating an account, you agree to the Goodreads{" "}
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
              <SignInButton mode="modal">
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
              Deciding what to read next?
            </h3>
            <p className="text-[#181818] leading-[1.6] text-[14px]">
              You're in the right place. Tell us what titles or genres you've
              enjoyed in the past, and we'll give you surprisingly insightful
              recommendations.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-bold mb-4 text-[#181818]">
              What are your friends reading?
            </h3>
            <p className="text-[#181818] leading-[1.6] text-[14px]">
              Chances are your friends are discussing their favorite (and least
              favorite) books on Goodreads.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Content Grid */}
      <section className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row gap-8 items-start">
        {/* Books Widget */}
        <div className="flex-1 w-full bg-[#f4f1ea] rounded-xl p-8 border border-[#e6e2d6]">
          <h3 className="text-[18px] mb-6 text-[#181818]">
            What will <span className="italic font-serif">you</span> discover?
          </h3>

          <div className="flex flex-wrap items-end gap-x-[20px] gap-y-6">
            <div className="flex flex-col gap-3">
              <span className="text-[13px] text-[#181818]">
                Because Brian liked...
              </span>
              <div className="flex gap-[12px]">
                <div className="w-[100px] h-[155px] bg-[#d7e1e6] flex items-center justify-center shadow-md">
                  <span className="text-[11px] text-[#556976] font-semibold text-center leading-tight">
                    Book Cover
                    <br />
                    Placeholder
                  </span>
                </div>
                <div className="w-[100px] h-[155px] bg-[#d1e0d3] flex items-center justify-center shadow-md">
                  <span className="text-[11px] text-[#4f6752] font-semibold text-center leading-tight">
                    Book Cover
                    <br />
                    Placeholder
                  </span>
                </div>
                <div className="w-[100px] h-[155px] bg-[#ced5df] flex items-center justify-center shadow-md">
                  <span className="text-[11px] text-[#4b5563] font-semibold text-center leading-tight">
                    Book Cover
                    <br />
                    Placeholder
                  </span>
                </div>
                <div className="w-[100px] h-[155px] bg-[#e3d1c5] flex items-center justify-center shadow-md">
                  <span className="text-[11px] text-[#715c4d] font-semibold text-center leading-tight">
                    Book Cover
                    <br />
                    Placeholder
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[#d8d8d8] font-bold mx-2 mb-16 text-3xl">
              ➔
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[13px] text-[#181818]">He discovered:</span>
              <div className="flex gap-3">
                <div className="w-25 h-38.75 bg-[#c1def0] flex items-center justify-center shadow-md">
                  <span className="text-[11px] text-[#497592] font-semibold text-center leading-tight">
                    Book Cover
                    <br />
                    Placeholder
                  </span>
                </div>
                <div className="text-[13px] font-bold flex items-center text-[#181818] ml-2">
                  Nonfiction, History
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
