import BaseLayout from "../components/baseLayout/baseLayout";
import BasePage from "../components/basePages";
import Shop from "../components/shop/shop";

export default function Home() {
  return (
    <BaseLayout title="home-page">
      <BasePage>
        <div className="d-flex flex-row flex-wrap padding-top">
          <Shop />
        </div>
      </BasePage>
    </BaseLayout>
  );
}
