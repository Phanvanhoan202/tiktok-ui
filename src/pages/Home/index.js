import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from '~/component/Video/video';
import { useEffect, useState } from 'react';
import { db } from '~/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import video from '~/assets/videos';

const cx = classNames.bind(styles);

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // this is where the code runs
        getData();
    }, []);

    const getData = async () => {
        const postsCol = collection(db, 'videos');
        const snapshot = await getDocs(postsCol);
        setVideos(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                videos: doc.data(),
            })),
        );
    };
    return (
        <div id="focus" className={cx('container')}>
            {videos.map((video) => (
                <Video key={video.id} data={video} />
            ))}
        </div>
    );
}

export default Home;
