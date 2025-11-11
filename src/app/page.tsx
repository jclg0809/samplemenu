"use client";
import { Button } from "sample/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "sample/components/pro-blocks/landing-page/tagline";
import { AspectRatio } from "sample/components/ui/aspect-ratio";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Card = (props: any) => {
  const { className = "", children, ...rest } = props;
  return (
    <div {...rest} className={`rounded-md bg-white/5 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = (props: any) => {
  const { className = "", children, ...rest } = props;
  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};

export default function HomePage() {
  return (
    <main>
      <section
        className="bg-background section-padding-y"
        aria-labelledby="hero-heading"
      >
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-1 flex-col gap-6 lg:gap-8">
            {/* Section Title */}
            <div className="section-title-gap-xl flex flex-col">
              {/* Tagline */}
              <Tagline>Hero Section</Tagline>
              {/* Main Heading */}
              <h1 id="hero-heading" className="heading-xl">
                Headline that solves user&apos;s main problem
              </h1>
              {/* Description */}
              <p className="text-muted-foreground text-base lg:text-lg">
                Follow with one or two sentences that expand on your value
                proposition. Focus on key benefits and address why users should
                take action now. Keep it scannable, short and benefit-driven.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/hello">
                <Button>Get started</Button>
              </Link>
              <Button variant="ghost">
                Explore
                <ArrowRight />
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full flex-1">
            <AspectRatio ratio={1 / 1}></AspectRatio>
          </div>
        </div>
      </section>
    </main>
  );
}

{
  /* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
      </div> */
}
{
  /* <div className="= mb-30 ml-150 h-full bg-amber-200 p-10">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        <img
                          className="p-9"
                          src={`/shoes/${index + 1}.png`}
                          alt={`Shoe ${index + 1}`}
                          // className="h-24 object-contain md:h-32"
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */
}
