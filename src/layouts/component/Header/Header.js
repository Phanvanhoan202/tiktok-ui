import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faBookmark,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
// import Tippy from '@tippyjs/react';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Image from '~/component/Image';
import { InboxIcon, MessageIcon, UploadIcon } from '~/component/Icons';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Singapore',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'US',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'UK',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Thái Lan',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Indonesia',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Malaysia',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Đan Mạch',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Pháp',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Italia',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Thụy Điển',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Trung Quốc',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        to: '/feedback',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];

function Header() {
    const currentUser = true;

    const userMenu = [
        {
            title: 'View Profile',
            icon: <FontAwesomeIcon icon={faUser} />,
        },
        {
            title: 'Favorites',
            icon: <FontAwesomeIcon icon={faBookmark} />,
            to: '/favorites',
        },
        {
            title: 'Get Coins',
            icon: <FontAwesomeIcon icon={faTiktok} />,
            to: '/getcoin',
        },
        {
            title: 'Settings',
            icon: <FontAwesomeIcon icon={faGear} />,
        },
        ...MENU_ITEMS,
        {
            title: 'Log out',
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            pararate: true,
        },
    ];

    // handle MenuItem
    const handleMenuItem = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('xu li ngon ngu');
                break;
            default:
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo  */}
                <div>
                    <Link className={cx('logo')} to={config.router.home}>
                        <img src={images.logo} alt="tiktok"></img>
                    </Link>
                </div>

                {/* search  */}
                <Search />

                {/* actions  */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* when user login  */}
                            <Tippy placement="bottom" content="Upload Video">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon width="3rem" height="3rem" />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Messages">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy placement="bottom" content="Inbox">
                                <button className={cx('actions-btn')}>
                                    <InboxIcon width="3.4rem" height="3.4rem" />
                                    <span className={cx('bage')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* when user no login  */}
                            <Button text to={config.router.upload} iconLeft={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    {/* // Menu dropdown */}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuItem}>
                        {currentUser ? (
                            <Image
                                src={images.avt1}
                                className={cx('user-avatar')}
                                alt="Nguyen Thi Truc Ngan"
                                // khi ảnh bị lỗi thì thay bằng hình dưới đây
                                fallBack="https://i.pinimg.com/originals/04/ab/c9/04abc994bd6b40ed9a148f56b37d68a6.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
