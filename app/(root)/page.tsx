import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
// import { client } from "@/sanity/lib/client";
import { startup_query } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = (await searchParams).query;
  
  // Fetching startups from Sanity using the sanityFetch function with live content API
  // This function is defined in the live.ts file and allows for real-time updates of content
  let posts: StartupCardType[] = [];
  try {
    const data = await sanityFetch<StartupCardType[]>(startup_query);
    posts = data || [];
  } catch (error) {
    console.error("Error fetching startups:", error);
  }

  // Alternatively, doing the same using client to fetch data directly without live updates

  // let posts: StartupCardType[] = [];
  // try{
  //   const data  = await client.fetch<StartupCardType[]>(startup_query)
  //   posts = data || [];
  // } catch (error) {
  //   console.error("Error fetching startups:", error);
  // }

  return (
    <>
      <section className="relative w-full flex flex-col items-center px-8 py-10 ">
        {/* Background design */}
        <div className="absolute inset-0 -z-10">
          <div className="relative h-full w-full -z-1000 [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-to-b [&>div]:from-blue-200 [&>div]:to-white">
            <div></div>
          </div>
        </div>

        <h1 className="heading ">
          Where the Next Big Ideas
          <span
            className="
            font-bold
            bg-gradient-to-r 
            from-slate-500 
            to-blue-400 
            bg-clip-text
            text-transparent 
            ml-2 relative 
            pb-1  
            after:content-['']
            after:absolute 
            after:bottom-0 
            after:left-0
            after:w-full 
            after:h-[3px] 
            after:bg-gradient-to-r 
            after:from-blue-500 
            after:to-purple-500"
          >
            Begin
          </span>
        </h1>

        <p className="text-center mx-auto mb-8 max-w-2xl text-lg text-slate-700">
          Discover and support Early stage Startups & Ideas redefining the
          future
        </p>
        <SearchForm query={query} />
      </section>

      <div className="bg_style ">
        <section className="section_container ">
          <p className="ml-4 text-3xl font-bold">
            {/* if query exist show "search results for the items searched" else show empty string/nothing */}
            {query ? `Search Results for "${query}"` : ""}
          </p>

          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post: StartupCardType) => (
                <StartupCard key={post._id} post={post} />
              ))
            ) : (
              <p className="no-results">No Startups Found!</p>
            )}
          </ul>
        </section>
      </div>

      <SanityLive /> 
    </>
  );
}
