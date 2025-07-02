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
  // params variable below is used to pass the search query to the Sanity fetch function
  // It is an object that contains the search term if provided, or null if not
  //params variabale is passed as a second key and value pair to the sanityFetch function, check fetch function to see how it is used
  const params = { search: query || null };

  // The query parameter is used to filter startups based on the search term
  // If no query is provided, it will fetch all startups
  // This allows for dynamic searching of startups based on user input

  // The startup_query is defined in the queries file and is used to fetch startups from Sanity
  // It includes filtering based on the search term if provided
  // This query is used to retrieve the data for the StartupCard components

  // The sanityFetch function is used to fetch data from Sanity with live updates
  // It allows for real-time updates of content without needing to refresh the page

  // The posts variable will hold the fetched startups data
  // It is initialized as an empty array and will be populated with the fetched data
  // If an error occurs during fetching, it will log the error to the console

  // Importing the necessary types and components
  // StartupCardType is used to define the type of the startup data being fetched
  // SearchForm is a component that allows users to search for startups based on a query

  // The Home component is the main entry point for the page
  // It fetches startups from Sanity and displays them in a grid format
  // It also includes a search form for filtering startups based on user input

  // The searchParams object contains the query parameter from the URL
  // This allows the page to dynamically update based on user input in the search form
  
  // Fetching startups from Sanity using the sanityFetch function with live content API
  // This function is defined in the live.ts file and allows for real-time updates of content
  let posts: StartupCardType[] = [];
  try {
    const data = await sanityFetch<StartupCardType[]>(startup_query, params);
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
