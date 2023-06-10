import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import {
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/nextjs";

const Home: NextPage = () => {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}
        </div>
        <div>
          {data?.map((post) => (<div key={post.id}>{post.content}</div>))}
        </div>
      </main>
    </>
  );
};

export default Home;
