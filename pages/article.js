import 'isomorphic-unfetch';

import data from '../mock/article.json';
import Layout from './components/Layout';
import RecentPosts from './components/RecentPosts';
import { secondaryTextColor, titleColor } from './components/constants';

function Article({ article: { title, content, postDate, author, imgUrl } }) {
  return (
    <Layout>
      <section className="block">
        <article>
          <div className="articleInfo">
            <h1 className="title">{title}</h1>
            <span className="date">Posted on {postDate}</span>
            <span className="author">Posted by {author}</span>
          </div>
          <img className="coverImage" src={imgUrl} />
          {/* TODO: should use dangerInsertHtml to render markup content from wp headless */}
          <p className="content">{content}</p>
        </article>
        <RecentPosts />
      </section>
      <style jsx>
        {`
          .block {
            display: flex;
            justify-content: space-around;
          }
          .title {
            color: ${titleColor};
            font-size: 24px;
            text-align: center;
          }
          article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 50%;
          }
          .articleInfo {
            font-size: 14px;
            margin-bottom: 30px;
          }
          .date {
            color: ${secondaryTextColor};
          }
          .author {
            margin-left: 20px;
          }
          .coverImage {
            height: auto;
            margin: 0 auto;
            max-width: 80%;
          }
        `}
      </style>
    </Layout>
  );
}

Article.getInitialProps = async () => {
  // const res = await fetch('../mock/article.json');
  // const json = await res.json();

  return {
    article: data,
  };
};

export default Article;
