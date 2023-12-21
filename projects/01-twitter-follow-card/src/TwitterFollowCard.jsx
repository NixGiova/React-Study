import { useState } from 'react';
import './TwitterFollowCard.css';

export function TwitterFollowCard({ children, userName, urlImage, initialIsFollowing }) {

    const [isFollowing, setIsFollowingState] = useState(initialIsFollowing);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const classButton = isFollowing ? 'nx-followCard-button is-following' : 'nx-followCard-button';

    return (
        <article className='nx-followCard'>
            <header className='nx-followCard-header'>
                <img className='nx-followCard-avatar'
                    src={urlImage}
                    alt="El avatar de midudev" />
                <div className='nx-followCard-info'>
                    <strong>{children}</strong>
                    <span className='nx-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={classButton} onClick={() => setIsFollowingState(!isFollowing)}>
                    <span className='nx-followCard-follow'>{text}</span>
                    <span className='nx-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}