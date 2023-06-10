import { type NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "~/components/layout";
import { api } from "~/utils/api";

const SinglePostPage: NextPage = () => {
  api.posts.getAll.useQuery();

  // Return empty div if both aren't loaded since user loads faster

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PageLayout>
        <div>Single Post View</div>
      </PageLayout>
    </>
  );
};

export default SinglePostPage;
