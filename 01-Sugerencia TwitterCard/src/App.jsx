import './codigo.css'
import { TwitterFollowCard  } from './TwitterFollowCard.jsx'

const users=[
{
    userName:'H-Este1193',
    name:'Esteban Espinosa Lopera',
    isFollowing: true,
},

{
userName:'midudev',
name:'Miguel Angel Duran',
isFollowing: false,
},

{ userName:'M0nica',
name:'Monica Powell',
isFollowing: true,

},

{ userName:'erikaheidi',
name:'Erika Heidi',
isFollowing: false,

}
]
export function App () {

return ( 
<section className="App">
{
users.map(user => {
const {userName,name,isFollowing} = user
return(

    <TwitterFollowCard
    userName={userName}
    key={userName}
    InicialIsFollowing={isFollowing}
    >
        {name}
    </TwitterFollowCard>
)

})
    }


</section>)
}