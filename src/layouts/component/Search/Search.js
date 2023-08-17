import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/component/AccountItem';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, SetSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 600);

    useEffect(() => {
        if (!debounceValue.trim()) {
            SetSearchResult([]);
            return;
        }
        setLoading(true);
         
        // axios
        //     .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
        //         params: {
        //             q: debounceValue,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         SetSearchResult(res.data.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
        // request API
        // const fetchApi = async () => {
        //     const res = await searchService.search(debounceValue);
        //     SetSearchResult(res.data);
        //     setLoading(false);
        // };
        // fetchApi();
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => {
                    return (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <span className={cx('search-title')}>Accounts</span>
                                {/* ket qua tim kiem */}
                                {searchResult.map((result) => {
                                    return <AccountItem key={result.id} data={result}></AccountItem>;
                                })}
                            </PopperWrapper>
                        </div>
                    );
                }}
                onClickOutside={(e) => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search accounts and videos"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        onClick={() => setShowResult(true)}
                    />
                    {/* button clear input */}
                    {!!searchValue && !loading && (
                        <button onClick={handleClear} className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                    )}

                    {loading && (
                        <div className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                        </div>
                    )}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
