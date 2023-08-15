import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>

            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <div className={cx('show-more')}>See more</div>
        </div>
    );
}

export default FollowingAccounts;
