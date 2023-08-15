import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu from './Menu';
import { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
    TrendIcon,
    TrendActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/component/Icons';
import SuggestAccounts from '~/component/SuggestAccounts';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;

    return (
        <div className={cx('wrapper-aside')}>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        icon={<HomeIcon />}
                        iconActive={<HomeActiveIcon />}
                        to={config.router.home}
                    />
                    <MenuItem
                        title="Following"
                        icon={<UserGroupIcon />}
                        iconActive={<UserGroupActiveIcon />}
                        to={config.router.following}
                    />
                    <MenuItem
                        title="Explore"
                        icon={<TrendIcon />}
                        iconActive={<TrendActiveIcon />}
                        to={config.router.explore}
                    />
                    <MenuItem
                        title="LIVE"
                        icon={<LiveIcon />}
                        iconActive={<LiveActiveIcon />}
                        to={config.router.live}
                    />
                </Menu>

                {currentUser && <SuggestAccounts label="Suggest accounts"></SuggestAccounts>}

                {currentUser && <SuggestAccounts label="Following Accounts"></SuggestAccounts>}

                {!currentUser && (
                    <div>
                        <div className={cx('sub')}>Log in to follow creators, like videos, and view comments.</div>
                        <Button large outline>
                            Login
                        </Button>
                    </div>
                )}
            </aside>
        </div>
    );
}

export default Sidebar;
