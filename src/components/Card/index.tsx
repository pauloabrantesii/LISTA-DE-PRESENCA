import './styles.css'
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';

export type CardProps = {
  name: string;
  time: string;
  id: string;
}

export function Card(props: CardProps) {
    const [isDeleted, setIsDeleted] = useState(false);
    
    function handleDelete() {
        setIsDeleted(true);
      }

      return isDeleted ? null : (
        <div className='card'>
          <strong>{props.name}</strong>
          <small>{props.time}</small>
          <button type='button' onClick={handleDelete}>
            <FaTrash />
          </button>
        </div>
      );
      
}





  