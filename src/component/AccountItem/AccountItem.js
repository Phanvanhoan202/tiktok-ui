import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} className={cx('avatar')} alt={data.full_name}></Image>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>{data.full_name}</h4>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>}
                </div>
                <div className={cx('username')}>{data.nickname}</div>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
