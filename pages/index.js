import Link from 'next/link';
import Layout from './components/Layout';

function Index() {
  return (
    <Layout>
      <Link href="/article">
        <a>Go to article page</a>
      </Link>
    </Layout>
  );
}

export default Index;
