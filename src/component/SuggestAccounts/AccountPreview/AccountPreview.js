import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import images from '~/assets/images';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img src={images.avt2} className={cx('avatar')} alt="avatar" />
                <Button primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname-wrapper')}>
                    <strong className={cx('nickname')}>bigdaddy.official</strong>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>BigDaddy</p>
                <p className={cx('analytics')}>
                    <strong> 8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong>10.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
