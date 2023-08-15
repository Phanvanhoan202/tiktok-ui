import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div>
            <Tippy
                interactive
                offset={[0, 0]}
                delay={[800, 0]}
                placement="bottom-start"
                zIndex="z-index"
                render={(attrs) => {
                    return (
                        <div className={cx('wrapper-preview')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('custom-popper')}>
                                <AccountPreview />
                            </PopperWrapper>
                        </div>
                    );
                }}
            >
                <div className={cx('wrapper-item')}>
                    <img src={images.avt2} className={cx('avatar')} alt="avatar" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname-wrapper')}>
                            <strong className={cx('nickname')}>bigdaddy.official</strong>
                            <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck}></FontAwesomeIcon>
                        </p>
                        <p className={cx('name')}>BigDaddy</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
