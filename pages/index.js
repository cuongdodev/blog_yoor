import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeCard from '../components/homecard'
import HeaderCard from '../components/headercard'
import { HacoCmsClient, SortQuery } from 'hacocms-js-sdk'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { style } from '@mui/system'

export async function getStaticProps() {
  // (1) プロジェクト基本設定画面のサブドメインに置き換えてください。
  const PROJECT_SUBDOMAIN = 'cuongdm-blogexample'

  // (2) プロジェクトの Access-Token に置き換えてください。
  const PROJECT_ACCESS_TOKEN = 'doVUmk39x8j9W57dYsFgPNBM'

  // API の利用に必要なクライアントを生成します。
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)

  // hacoCMS の記事 API /entries に GET リクエストを送信し、最近 5 件の記事一覧が入ったレスポンスを受け取ります。
  const res = await client.getList(Object, '/home', { s: "index", limit: 3, offset: 0 })

  // 記事の一覧は res.data に入っているので取り出します。
  const recentEntries = res.data
  const meta = res.meta

  return {
    props: {
      recentEntries,
      meta,
    },
  }
}

export default function Home({ recentEntries, meta }) {

  const handleChangePage = (page) => {
    console.log("{ newPage }", page)
    fetchData();
  };

  const fetchData = async () => {
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headerCardContainer}>
          <HeaderCard
            image="/yoor_header.png"
          />
        </div>
        <div className={styles.mainCard}>
          <div className={styles.pageHome}>
            <div className={styles.containerHome}>
              {recentEntries.map((post) => (
                <HomeCard
                  key={post.id}
                  title={post.title_home}
                  date={post.date_home}
                  image={post.image_home}
                  des={post.des_home}
                  link={post.url_detail}
                />
              ))}
            </div>
            <div className={styles.bottomPage}>
              <Stack spacing={2}>
                <Pagination count={meta.total % meta.limit} shape="rounded" onChange={(_, value) => handleChangePage(value)} />
              </Stack>
            </div>
          </div>
          <div className={styles.pageSearch}>
            <form method="get" action="https://blog.yoor.jp/search" className={styles.search}>
              <input name="keyword" type="text"
                className={styles.search__text}
                placeholder="ブログ内検索"
              />
              <input value="検索" type="submit" className={styles.searchSubmit} />
            </form>
          </div>
        </div>
      </main >
      <footer className={styles.footer}>
        <a
          href="https://blog.seesaa.jp/">
          <Image src="/seesaa.svg" alt="Search Logo" width={70} height={14} />
          <Image src="/blog.svg" alt="Search Logo" width={53} height={17} />
        </a>
      </footer>
    </div >
  )
}
