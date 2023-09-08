import { useAJAX } from "component/hooks/useAJAX";
import { getURLRecommend } from "config/config";
import LayoutSlide from "layout/LayoutSlide";
import React from "react";
import { useParams } from "react-router-dom";

const RecommendList = () => {
  const { movieId } = useParams();
  const [dataRecommend] = useAJAX(getURLRecommend(movieId));
  const recommendList = dataRecommend?.results || [];

  return <LayoutSlide list={recommendList}></LayoutSlide>;
};

export default RecommendList;
