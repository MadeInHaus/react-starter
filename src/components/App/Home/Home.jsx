import React from 'react';
import { Text } from 'ui';

import styles from './Home.scss';

const Navigation = () => (
    <article className={styles.root}>
        <Text tag="h1" theme="headline">
            🙋‍♂️
        </Text>
        <Text tag="h2" theme="subheadline">
            Comes bundled with React, Redux, CSS Modules, React-Router 4,
            Webpack 4 and more!
        </Text>
        <div className={styles.columns}>
            <Text tag="p" theme="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tortor orci, ullamcorper eu nulla sit amet, ornare mollis
                mauris. Nulla id tempor justo. Proin eu tincidunt enim, at
                venenatis neque. Maecenas a placerat diam, quis sodales orci.
                Sed tortor sem, malesuada id mollis vel, tincidunt dignissim
                orci.
            </Text>
            <div className={styles.videoWrapper}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/t0I4mTEdAf8?rel=0&amp;controls=0&amp;showinfo=0&amp;start=5"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className={styles.video}
                />
            </div>
            <Text tag="p" theme="body">
                Sed ut nibh sed odio cursus sollicitudin. Vivamus tempor tempus
                ipsum, quis rhoncus neque. Donec facilisis tortor ut lacus
                rutrum ultricies. Proin sed dolor sed magna eleifend rhoncus nec
                nec massa.
            </Text>
            <Text tag="p" theme="body">
                Sed ut nibh sed odio cursus sollicitudin. Vivamus tempor tempus
                ipsum, quis rhoncus neque. Donec facilisis tortor ut lacus
                rutrum ultricies. Proin sed dolor sed magna eleifend rhoncus nec
                nec massa. Sed dictum convallis velit, ut vulputate magna varius
                cursus. Sed hendrerit eleifend viverra. Aliquam interdum varius
                maximus. Praesent a facilisis risus. Fusce enim lectus,
                sollicitudin vel diam at, accumsan rhoncus odio.
            </Text>
            <Text tag="p" theme="body">
                Sed ut nibh sed odio cursus sollicitudin. Vivamus tempor tempus
                ipsum, quis rhoncus neque. Donec facilisis tortor ut lacus
                rutrum ultricies. Proin sed dolor sed magna eleifend rhoncus nec
                nec massa.
            </Text>
            <Text tag="p" theme="body">
                Sed ut nibh sed odio cursus sollicitudin. Vivamus tempor tempus
                ipsum, quis rhoncus neque. Donec facilisis tortor ut lacus
                rutrum ultricies. Proin sed dolor sed magna eleifend rhoncus nec
                nec massa. Sed dictum convallis velit, ut vulputate magna varius
                cursus. Sed hendrerit eleifend viverra. Aliquam interdum varius
                maximus. Praesent a facilisis risus. Fusce enim lectus,
                sollicitudin vel diam at, accumsan rhoncus odio.
            </Text>
        </div>
    </article>
);

export default Navigation;
