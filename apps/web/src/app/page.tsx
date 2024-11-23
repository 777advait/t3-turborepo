import { Button } from "@repo/ui/components/button";
import { ArrowUpRight, Star } from "@repo/ui/icons";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-8 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto p-4 lg:p-0 relative mt-16 sm:mt-24">
        <div className="flex justify-between max-sm:flex-col">
          <div className="flex flex-col justify-start py-16 space-y-8 w-[45%] max-sm:w-full">
            <div>
              <div className="inline-block rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm font-medium">
                Hello!
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                I&apos;m Jenny,
                <br />
                <span className="text-muted-foreground">Product Designer</span>
              </h1>
            </div>
            <div className="w-full">
              <blockquote className="border-l-2 pl-6 italic max-sm:pl-3">
              i'm a multidisciplinary full-stack engineer focused on building scalable and performant applications. i enjoy crafting minimal user-interfaces using Next.js and TypeScript and robust backends using libraries/tools like DrizzleORM and Supabase .
            </blockquote>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="group">
                Portfolio
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              <Button variant="outline">Hire me</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative aspect-square h-[575px] w-auto overflow-hidden rounded-full bg-muted/25 max-sm:h-auto">
              <img
                src="/astro.png"
                alt="Portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 top-4 rounded-lg border bg-background p-4 shadow-lg">
              {/* <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-2 text-2xl font-bold">10 Years</div>
              <div className="text-sm text-muted-foreground">Experience</div> */}
              <h1>"Something Cool"</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}