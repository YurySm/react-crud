
import "./app-filter.css";

const AppFilter = (props) => {
    
    const btnsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'like', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ];

    const btns = btnsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz =  active ? "btn btn-light" : "btn btn-outline-light";
        return(
            <button type="button"
                    className={clazz}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter;