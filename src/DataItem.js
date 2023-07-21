import './App.css'
import binIcon from './bin.png'

export default function DataItem(props){
    const handleDeleteItem = () =>{
        if(props.onDelete){
            props.onDelete(props.title);
        }
    }

    return (
        <div className="item_box">
          <h4>{props.title}</h4>
          <button
          className="delete_button"
          onClick={handleDeleteItem}
          >
              <img src={binIcon} alt="Delete" />
          </button>
        </div>
      );
}