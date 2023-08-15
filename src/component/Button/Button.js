import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    onClick,
    iconLeft,
    iconRight,
    disable = false,
    small,
    large,
    className,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    //remove event when btn disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });

        delete props.to;
        delete props.href;
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        small,
        large,
        disable,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    className: PropTypes.string,
};

export default Button;
