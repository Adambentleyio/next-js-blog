import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function fourOhFour() {
  return (
    <Layout>
      <h1 className={utilStyles.headingLg}>
        Oops... looks like we couldn't find that 🙄
      </h1>
      <p className={utilStyles.lightText}>
        The button below will take you home, or you can click the back button to
        naviagte to your previous page.
      </p>
    </Layout>
  );
}
