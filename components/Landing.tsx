"use client";

import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <main className="container">
      <section className="wrapper">
        <div className="bg-(--bg-secondary) rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="flex-1 space-y-6 max-w-md">
            <p className="text-sm font-semibold text-(--text-secondary)">
              listners-key
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-(--text-primary)">
              Talk to your books.
              <br />
              Learn faster.
            </h1>
            <p className="text-(--text-secondary) text-[17px] leading-relaxed">
              Upload a PDF and start a voice conversation with an AI assistant
              grounded in the book.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <SignInButton mode="modal">
                <Button className="btn-primary h-12 px-7">Get Started</Button>
              </SignInButton>
              <p className="text-sm text-(--text-secondary)">
                Sign in to create your library.
              </p>
            </div>
          </div>

          {/* Center image placeholder */}
          <div className="flex w-full lg:flex-auto justify-center items-center">
            <div className="w-full max-w-115">
              <div className="bg-white rounded-2xl border border-(--border-subtle) p-4 shadow-soft">
                <div className="h-60 md:h-75 rounded-xl bg-accent flex items-center justify-center">
                  <span className="text-(--text-secondary) text-sm font-medium">
                    Landing image placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: feature placeholders */}
          <div className="flex-1 w-full max-w-90">
            <div className="bg-white rounded-2xl p-8 space-y-6 shadow-soft">
              <div className="space-y-2">
                <h3 className="font-bold text-(--text-primary)">
                  Upload your PDF
                </h3>
                <p className="text-(--text-secondary) text-sm">
                  Well parse it and prepare it for chat.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-(--text-primary)">
                  Ask anything
                </h3>
                <p className="text-(--text-secondary) text-sm">
                  Get explanations, summaries, and quick recall.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-(--text-primary)">
                  Voice conversations
                </h3>
                <p className="text-(--text-secondary) text-sm">
                  Speak naturally while you learn.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="h-22 rounded-xl bg-accent border border-(--border-subtle) flex items-center justify-center">
                  <span className="text-(--text-secondary) text-xs font-medium">
                    Image placeholder
                  </span>
                </div>
                <div className="h-22 rounded-xl bg-accent border border-(--border-subtle) flex items-center justify-center">
                  <span className="text-(--text-secondary) text-xs font-medium">
                    Image placeholder
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
