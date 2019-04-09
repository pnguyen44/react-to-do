import React , {Component} from 'react'
import TodoItem from './TodoItem'
import {getTodos} from '../api'
// import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 50,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: props.todos
    }
  }

  async onGetTodos() {
     await getTodos()
     .then(res => {
       return res.json()
     })
     .then(data => {
       this.setState({todos: data})
     })
  }

  async componentDidMount() {
    await this.onGetTodos()
   this.props.setTodos({todos: this.state.todos})
  }


componentDidUpdate(prevProps) {
  if (this.props.todos !== prevProps.todos) {
    this.setState({todos: this.props.todos})
  }
}

  render() {

    const {flash, setTodos} = this.props
    const {todos} = this.state
    const { classes } = this.props;
    const todosComponent = todos.map(item => {
      return <TodoItem
        key={item._id}
        item={item}
        flash={flash}
        todos={todos}
        setTodos={setTodos}
        />
      })

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableHead>
          </TableHead>
          <TableBody>
            {todosComponent}
          </TableBody>
        </Table>
        </div>
      </Paper>
    )
  }
}

Todos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Todos);
