import Header from '~/layouts/component/Header';
import classNames from 'classnames/bind';
import styles from '~/layouts/DefaultLayout/DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnlyLayout;
