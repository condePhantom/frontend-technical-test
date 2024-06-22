import { FC } from "react";
import BaseLayout from "../components/layout/BaseLayout";
import HomeCategories from "../components/organisms/HomeCategories";

const Home: FC = () => {
  return (
    <BaseLayout title={"Popular Titles"}>
      <HomeCategories />
    </BaseLayout>
  );
};

export default Home;
