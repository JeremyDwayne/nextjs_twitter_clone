import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const SinglePostPage: NextPage = () => {
  api.posts.getAll.useQuery();

  // Return empty div if both aren't loaded since user loads faster

  return (
    <>
      <Head>
        <title>Safer Pilot</title>
        <meta
          name="description"
          content="Become A Safer Pilot Through Proficiency"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div>Single Post View</div>
        </div>
      </main>
    </>
  );
};

export default SinglePostPage;
