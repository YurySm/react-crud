import {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John S.', salary:800, increase: true, like: false, id: uuidv4() },
        {name: 'Alex M.', salary:900, increase: false, like: true, id: uuidv4() },
        {name: 'Max A.', salary:1800, increase: false, like: false, id: uuidv4() },
      ],
      term: '',
      filter: 'all'
    }

  }

  deleteItem = (id) => {
    this.setState(({data}) => ({data: data.filter(item => item.id !== id)}))
  }

  addItem = (state) => {
    this.setState(({data}) => ({data : [...data,  { ...state, increase: false, like: false, id: uuidv4()}]}));
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return{...item, [prop]: !item[prop]}
        }
        return item;
      })
    }));
  }
  
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    });
  } 

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch(filter) {
      case 'like' : 
        return items.filter(item => item.like);
      case 'moreThen1000' :
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }


  render() {
    const {data, term, filter} = this.state;
    const employees = data.length;
    const increased = data.filter(item => item.increase === true).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
          <AppInfo employees={employees} increased={increased}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList 
              data={visibleData}
              onDelete={this.deleteItem}
              onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
