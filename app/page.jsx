import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient ">AI-Powered Prompts</span>
      </h1>

      <p className="text-center desc">
        Promptopia is an open-source AI Prompting tool for modern world to
        discover , create and share creative prompts
      </p>

      <Feed/>
    </section>
  );
};

export default Home;
