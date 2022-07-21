// components ------------------------------------------
import type { NextPage } from 'next'
import Link from 'next/link';
import Header from '@/components/oganisms/header';

// template --------------------------------------------

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>next.js 検証</h1>
      <Link href='/posts'>
        <a>・記事一覧ページ</a>
      </Link>
    </div>
  )
}

export default Home;
