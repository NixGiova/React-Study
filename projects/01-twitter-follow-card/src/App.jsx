import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: `NixGiova`,
        isFollowing: true,
        name: `Nixon Giovanni Moreno`,
    },
    {
        userName: `NixGiova1`,
        isFollowing: false,
        name: `Nixon Giovanni Moreno`,
    },
    {
        userName: `NixGiova2`,
        isFollowing: true,
        name: `Nixon Giovanni Moreno`,
    }
];

const urlImage = `https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg?w=826`;


export function App() {

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user;
                    return (
                        <TwitterFollowCard
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            urlImage={urlImage}
                            key={userName}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    );

}

