import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCircleCheck, faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import video from '~/assets/videos';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Video({ data }) {
    // useEffect(() => {
    //     document.getElementById('focus').focus();
    // }, []);
    const result = data.videos;

    const VideoInfo = () => {
        return (
            <div className={cx('info-wrapper')}>
                <div>
                    <img src={data.videos.avatar} alt="avatar" className={cx('avatar')} />
                </div>
                <div className={cx('info')}>
                    <p className={cx('nickname-wrapper')}>
                        <strong className={cx('nickname')}>{result.nickname}</strong>
                        <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck}></FontAwesomeIcon>
                        <span className={cx('name')}>{result.name}</span>
                    </p>
                    <p className={cx('caption')}>{result.caption}</p>
                    <p className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} className={cx('icon-music')}></FontAwesomeIcon>
                        <span className={cx('song-name')}>{result.music}</span>
                    </p>
                </div>
                <Button className={cx('custom-button')} outline>
                    {' '}
                    Follow{' '}
                </Button>
            </div>
        );
    };

    const VideoContent = () => {
        const videoRef = useRef();
        const [playing, setPlaying] = useState(true);

        const handleVideo = () => {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            } else {
                videoRef.current.play();
                setPlaying(true);
            }
        };

        return (
            <div className={cx('wrapper-video')}>
                <video
                    ref={videoRef}
                    tabIndex="-1"
                    className={cx('video')}
                    type="video/npm4"
                    loop
                    src={result.video}
                    onClick={handleVideo}
                ></video>
                <div className={cx('actions')}>
                    <div className={cx('item-action')}>
                        <div className={cx('icon-action')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span className={cx('total')}>{result.like}K</span>
                    </div>
                    <div className={cx('item-action')}>
                        <div className={cx('icon-action')}>
                            <FontAwesomeIcon icon={faComment} />
                        </div>
                        <span className={cx('total')}>{result.comment}</span>
                    </div>
                    <div className={cx('item-action')}>
                        <div className={cx('icon-action')}>
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <span className={cx('total')}>{result.bookmark}</span>
                    </div>
                    <div className={cx('item-action')}>
                        <div className={cx('icon-action')}>
                            <FontAwesomeIcon icon={faShare} />
                        </div>
                        <span className={cx('total')}>{result.share}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div id="focus" className={cx('container')}>
            <VideoInfo />
            <VideoContent />
        </div>
    );
}

export default Video;
