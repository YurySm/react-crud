
import './employees-list-item.css';

const EmployeesListItem = (props) =>  {
    // const {name, salary, onDelete, onToggleIncrease, onToggleLike, increase, like} = props;
    const {name, salary, onDelete, onToggleProp, increase, like} = props;

    let className = "list-group-item d-flex justify-content-between";
    if(increase) {
        className += " increase";
    }
    if(like) {
        className += " like";
    }

    return (
        <li className={className}>
            <span 
                className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle="like">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                data-toggle="increase"
                onClick={onToggleProp}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;