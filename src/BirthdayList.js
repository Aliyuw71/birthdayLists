import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function BirthdayList({people,setPeople}) {
    const DeleteBtn = (id) =>{
        const newList = people.filter((person)=>{
            return(
                person.id !== id
            )
        })
        setPeople(newList)
    }
    const clearAllBtn = () => {
        setPeople([])
    }
  return (
    <main>
        {
            people.map((person)=>{
                const {id,image,name,age} = person
                return (<article key={id} className='person'>
                    <div className='img-container'>
                        <img src={image} alt="person" className='img' />
                    </div>
                    <div className='details'>
                        <h5 className='name'>{name}</h5>
                        <p className='age'>{age} years</p>
                        <button onClick = {() => DeleteBtn(id)} className='btn'>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </article>
                )
                })
        }
        { 
            (people.length)? <p className='clearbtn' onClick={clearAllBtn}>
            CLEAR ALL
        </p> : null
        }
         
    </main>
  )
}

export default BirthdayList