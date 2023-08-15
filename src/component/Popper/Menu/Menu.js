import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './Menuitem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item) => {
            return (
                <MenuItem
                    key={item.title}
                    data={item}
                    onClick={() => {
                        const isParent = !!item.children;
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // handle Back Menu
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    // render in tippy
    const renderResult = (attrs) => {
        return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-proper')}>
                    {/* Header Menu  */}
                    {history.length > 1 && <Header title={current.title} onBack={handleBack} />}

                    {/* render menuItem  */}
                    <div className={cx('menu-body')}>{renderItem()}</div>
                </PopperWrapper>
            </div>
        );
    };

    // reset Menu first page when Hide Tippy
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            offset={[16, 8]}
            interactive
            placement="bottom-end"
            hideOnClick={hideOnClick}
            delay={[0, 800]}
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
