import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        pararate: data.pararate,
    });
    return (
        <Button className={classes} iconLeft={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
