import Hero from '../components/Hero/Hero';
import Project from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Project/>
    </Layout>
  );
};

export default Home;
