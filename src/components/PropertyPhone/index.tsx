import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


export const PropertyPhone:React.FC = () => {
    const [phone, setPhone] = React.useState<{
        imageUrl: string;
        title: string;
        price: number;
      }>();
    
      const { id } = useParams();
      const navigate = useNavigate();
    
      React.useEffect(() => {
        async function fetchPhone() {
          try {
            const { data } = await axios.get('https://618e3ea350e24d0017ce1178.mockapi.io/Items/' + id);
            setPhone(data);
          } catch (error) {
            alert('Товар не найден!');
            navigate('/');
          }
        }
    
        fetchPhone();
      }, []);
    
      if (!phone) {
        return <>Загрузка...</>;
      }
  return (
    <div><div className="product">
    <div className="product--specifications">
    <div className="product--property">

    </div>
    </div>
    </div>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link></div>
  )
}
