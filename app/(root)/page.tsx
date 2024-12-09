import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home({searchParams} : {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name:'Arif' },
      _id: 1,
      description: "Description",
      image: "https://plus.unsplash.com/premium_photo-1732730224306-3b469ea9e640?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots"
    },
    {
      _createdAt: new Date(),
      views: 45,
      author: { _id: 2, name:'Faysal' },
      _id: 2,
      description: "Description",
      image: "https://images.unsplash.com/photo-1731582338361-f5d4101e3a25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Laptops",
      title: "We Laptops"
    },
  ]

  return (
    <>
        <section className="pink_container">
          <h1 className="heading">Pitch your startup
            <br />
            Connect with Enterpreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Completitions
          </p>
          <SearchForm query={query} />
        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            { query ? `Search results for "${query}"` : 'All Startups' }
          </p>

          <ul className="mt-7 card_grid">
            {
              posts?.length > 0 ? (
              posts.map((post: StartupCard, index: number) => (
                <StartupCard key={post._id} post={post} />
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )
            }
          </ul>
        </section>
    </>
  );
}
