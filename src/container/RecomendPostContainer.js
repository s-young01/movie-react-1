import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../config/apiurl";
import { getDatas } from "../moduls/moviePost";
import RecomendPage from "../pages/RecomendPage";

const recommendData = async () => {
    const data = await axios.get(`${API_URL}/recomend`);
    return data;
}

const RecomendPostContainer = () => {
    const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        dispatch(getDatas(recommendData));
    }, [dispatch]);
    if(loading) return <div>로딩중입니다..</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <RecomendPage data={data} />
    );
};

export default RecomendPostContainer;