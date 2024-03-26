import TailButton from "../UI/TailButton";
import TailInput from "../UI/TailInput";
import { useRef, useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";

export default function GalleryMain() {

    const keyword = useRef();
    const [tdata, setTdata] = useState();
    const [tags, setTags] = useState(); //setTags fetch된 tdata의 갯수만큼 갤러리카드가 돌도록 > 갤러리카드를 임포트해야지

    useEffect(() => {
        if (!tdata) return; //tdata에 아무것도없으면 아무것도 안하고
        let tm = tdata.map((item) =>
            <GalleryCard key={item.galContentId}
                imgUrl={item.galWebImageUrl.replace('http://', 'https://')}
                title={item.galTitle}
                ptitle={item.galPhotographyLocation}
                ktag={item.galSearchKeyword} />
        );
        setTags(tm);
    }, [tdata]);//tdata가 바뀌면 자동호출

    const getData = (w) => {
        console.log(w);
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = url + `&keyword=${w}&_type=json`

        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.response.body.items.item))//배열을 셋데이터에 넣었다
            .catch(err => console.log(err))
    }

    const handleFetch = () => {
        let w = encodeURI(keyword.current.value);
        getData(w);
    }

    const handleClear = () => {
        setTdata('')
        setTags('')
        keyword.current.value = '';
        keyword.current.focus();
        console.log(keyword.current.value);
    }

    return (
        <div className="w-11/12 flex flex-col 
                    mt-5
                    h-full justify-start items-center">
            <div className="w-2/5 grid grid-cols-1 md:grid-cols-3 
                      bg-slate-200
                      p-2
                      gap-4">
                <div className="p-2">
                    <TailInput type="text"
                        inputRef={keyword}
                        ph="키워드 입력" />
                </div>
                <div className="px-3">
                    <TailButton caption="조회"
                        color="blue"
                        handleClick={handleFetch} />
                </div>
                <div className="px-3">
                    <TailButton caption="취소"
                        color="blue"
                        handleClick={handleClear} />
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                      p-2
                      gap-4">
                {tags}
            </div>
        </div>
    )
}