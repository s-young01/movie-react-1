import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatas_REC } from "../moduls/recomendPost";
import RecomendPage from "../pages/RecomendPage";

const RecomendPostContainer = () => {
    const {loading, data, error} = useSelector(state => state.moviePost_REC.moviePosts);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        dispatch(getDatas_REC());
    }, [dispatch]);
    if(loading) return <div>로딩중입니다..</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <RecomendPage data={data} />
    );
};

export default RecomendPostContainer;