import Search from "@/components/search";
import Bookmark from "./bookmark";
import './index.less';

const IndexView = () => {
  return (
    <div>
      <div className="search-wrap flex-block-center">
        <Search></Search>
      </div>
      <Bookmark />
    </div>
  )
}

export default IndexView