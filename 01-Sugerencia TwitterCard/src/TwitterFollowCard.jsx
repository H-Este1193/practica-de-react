import { useState } from 'react'

export function TwitterFollowCard({children,userName,
InicialIsFollowing}) {

console.log('[TwitterFollowCard] render width userName: ', userName)

const [isFollowing,setIsFollowing]= useState(InicialIsFollowing)
const text = isFollowing ? 'Siguiendo' : 'Seguir'
const buttonClassname = isFollowing ? "tw-followCard-button is-folliwing ":"tw-followCard-button"
const handLeClick =()=> {
setIsFollowing(!isFollowing)}
   
return (
 <article className="tw-followCard">
    <header className="tw-followCard-header">
    <img className="tw-followCard-img" atl="El avatar" src={`https://unavatar.io/${userName}`}></img>
    <div className="tw-followCard-div">
    <strong>{children}</strong>
    <span className="tw-followCard-infoUsername">@{userName}</span>
    </div>
    </header>

    <aside>
    <button className={buttonClassname} onClick={handLeClick}>
    <span className='tw-followCard-text'>{text}</span>
    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
   </button></aside>
   </article>

    )
    }