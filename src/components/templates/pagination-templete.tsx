// components ------------------------------------------
import ArticleList from '@/components/oganisms/article-list/index';
import Pagination from '@/components/oganisms/pagination/index';
import Header from '@/components/oganisms/header';
import { TArticle } from '@/@types/article';
import { TPaginationLinkList } from '@/@types/pagenation';


type Tprops = {
  posts: TArticle[]
  paginations: TPaginationLinkList
}

// template --------------------------------------------
const PaginationTemplate = (props: Tprops) => {
  return (
    <div>
      <Header />
      <ArticleList posts={props.posts} />
      <Pagination pageList={props.paginations} />
    </div>
  );
}

export default PaginationTemplate;
