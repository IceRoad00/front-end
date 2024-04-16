import React, { useEffect, useRef, useState } from 'react'


// Custom Hook :
// - 리액트의 훅 함수는 반드시 함수형 컴포넌트의 코드 블럭에서만 호출 가능
// - 함수명을 use로 시작하게 작성하여 커스텀 훅 함수를 만들 수 있음
// - 커스텀 훅 함수에는 다른 훅 함수를 포함할 수 있음

function usePagenation(totalList: string[]) {
    const [page, setPage] = useState<number>(1);
    const [section, setSection] = useState<number>(1);
    const [boardList, setBoardList] = useState<string[]>([]);
    const [viewList, setViewList] = useState<string[]>([]);
    const [viewPageList, setViewPageList] = useState<number[]>([]);

    const totalPageCount = useRef<number>(1);
    const totalSectionCount = useRef<number>(1);

    const COUNT_PER_PAGE = 5;
    const COUNT_PER_SECTION = 10;
    
    const setNextSection = () => {
        if(section === totalSectionCount.current) return;
        setSection(section + 1);

        const page = section * COUNT_PER_SECTION + 1;
        setPage(page);
    }

    const setPreviousSection = () => {
        if(section === 1) return;
        setSection(section - 1);

        const page = (section - 1) * COUNT_PER_SECTION;
        setPage(page);
    }

    const changeViewList = (boardList: string[]) => {
        const viewList = [];
        const currentPageStart = COUNT_PER_PAGE * (page - 1);
        const currentPageEnd = COUNT_PER_PAGE * page - 1;
        
        for(let index = currentPageStart; index <= currentPageEnd; index++) {
            if(index >= boardList.length) break;
            viewList.push(boardList[index]);
        }
        setViewList(viewList);
    }

    const changeViewPageList = () => {
        const viewPageList = [];
        const currentSectionStart = COUNT_PER_SECTION * section - (COUNT_PER_SECTION - 1);
        const currentSectionEnd = COUNT_PER_SECTION * section;

        for(let page = currentSectionStart; page <= currentSectionEnd; page ++) {
            if(page > totalPageCount.current) break;
            viewPageList.push(page)
        }
        setViewPageList(viewPageList);
    }

    useEffect(() => {
        const boardList = totalList;
        setBoardList(BOARD_LIST);
        totalPageCount.current = Math.floor((boardList.length - 1) / COUNT_PER_PAGE) + 1;
        totalSectionCount.current = Math.floor((boardList.length-1) / (COUNT_PER_PAGE * COUNT_PER_SECTION)) + 1;

        changeViewList(boardList);
        changeViewPageList();
    },[]);

    useEffect(() => {
        if(!boardList.length) return;
        changeViewList(boardList);
    },[page])

    useEffect(() => {
        changeViewPageList();
    },[section])

    return {
        page, setPage, viewList, viewPageList, setPreviousSection, setNextSection
    }
}
export default function CustomHook() {

    const {page, setPage, viewList, viewPageList, setPreviousSection, setNextSection} = usePagenation(BOARD_LIST);

    // pageCount = 107 게시물
    // boardCount = 한 페이지 게시물 5개씩 보여줌
    // SectionCount = 페이지네이션 한 섹션당 10개를 보여줌(페이지 넘김)

    // totalPageCount = 총 페이지 수 : 22
    // totalPageCount = Math.floor((boardCount - 1) / 5) + 1

    // totalSectionCount = 총 섹션 수 : 3
    // totalSectionCount = Math.floor((boardCount - 1) / (5 * 10)) + 1

    // currentPageStart = 5 * (page - 1)
    // currentPageEnd = 5 * page - 1

    // viewList = [];
    // for(index = currentPageStart; index <= currentPageEnd; ++);
        // if(index >= boardList.length) break;
        // viewList.push(boardList[index])
    
    // currentSectionStart = 10 * section - 9
    // currentSectionEnd = 10 * section

    // viewPageList = []
    // for(index = currentSectionStart; index <= currentSectionEnd; ++);
        // if(totalPage < index) break;
        // viewPageList.push(index)

    return (
        <div>
            {viewList.map((item, index) => <h3 key={index}>{item}</h3>)}
            <div>
                <span 
                    style={{display:"inline-block",margin:"4px"}} onClick={setPreviousSection}>이전
                </span>
                {viewPageList.map((item, index) => 
                    <span 
                    style={{display:"inline-block", margin:"4px", fontWeight: item == page ? 900 : 400}} onClick={() => setPage(item)}>{item}
                    </span>)}
                <span style={{display:"inline-block",margin:"4px"}} onClick={setNextSection}>이후
                </span>
            </div>
        </div>
    )
}

const BOARD_LIST = [
    '게시물1', 
    '게시물2', 
    '게시물3', 
    '게시물4', 
    '게시물5', 
    '게시물6', 
    '게시물7', 
    '게시물8', 
    '게시물9', 
    '게시물10', 
    '게시물11', 
    '게시물12', 
    '게시물13', 
    '게시물14', 
    '게시물15', 
    '게시물16', 
    '게시물17', 
    '게시물18', 
    '게시물19', 
    '게시물20', 
    '게시물21', 
    '게시물22', 
    '게시물23', 
    '게시물24', 
    '게시물25', 
    '게시물26', 
    '게시물27', 
    '게시물28', 
    '게시물29', 
    '게시물30', 
    '게시물31', 
    '게시물32', 
    '게시물33', 
    '게시물34', 
    '게시물35', 
    '게시물36', 
    '게시물37', 
    '게시물38', 
    '게시물39', 
    '게시물40', 
    '게시물41', 
    '게시물42', 
    '게시물43', 
    '게시물44', 
    '게시물45', 
    '게시물46', 
    '게시물47',
    '게시물1', 
    '게시물2', 
    '게시물3', 
    '게시물4', 
    '게시물5', 
    '게시물6', 
    '게시물7', 
    '게시물8', 
    '게시물9', 
    '게시물10', 
    '게시물11', 
    '게시물12', 
    '게시물13', 
    '게시물14', 
    '게시물15', 
    '게시물16', 
    '게시물17', 
    '게시물18', 
    '게시물19', 
    '게시물20', 
    '게시물21', 
    '게시물22', 
    '게시물23', 
    '게시물24', 
    '게시물25', 
    '게시물26', 
    '게시물27', 
    '게시물28', 
    '게시물29', 
    '게시물30', 
    '게시물31', 
    '게시물32', 
    '게시물33', 
    '게시물34', 
    '게시물35', 
    '게시물36', 
    '게시물37', 
    '게시물38', 
    '게시물39', 
    '게시물40', 
    '게시물41', 
    '게시물42', 
    '게시물43', 
    '게시물44', 
    '게시물45', 
    '게시물46', 
    '게시물47',
    '게시물1', 
    '게시물2', 
    '게시물3', 
    '게시물4', 
    '게시물5', 
    '게시물6', 
    '게시물7', 
    '게시물8', 
    '게시물9', 
    '게시물10', 
    '게시물11', 
    '게시물12', 
    '게시물13', 
    '게시물14', 
    '게시물15', 
    '게시물16', 
    '게시물17', 
    '게시물18', 
    '게시물19', 
    '게시물20', 
    '게시물21', 
    '게시물22', 
    '게시물23', 
    '게시물24', 
    '게시물25', 
    '게시물26', 
    '게시물27', 
    '게시물28', 
    '게시물29', 
    '게시물30', 
    '게시물31', 
    '게시물32', 
    '게시물33', 
    '게시물34', 
    '게시물35', 
    '게시물36', 
    '게시물37', 
    '게시물38', 
    '게시물39', 
    '게시물40', 
    '게시물41', 
    '게시물42', 
    '게시물43', 
    '게시물44', 
    '게시물45', 
    '게시물46', 
    '게시물47'
]
