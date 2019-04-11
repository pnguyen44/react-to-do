import React , {Component} from 'react'
import TodoItem from './TodoItem'
import {getTodos} from '../api'
// import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing.unit * 3,
    overflow: 'scroll',
    height: '600px',
    padding: '0px 10rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 1rem',
    },
  },
  table: {
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
        <div className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
          </TableHead>
          <TableBody>
            {todosComponent}
          </TableBody>
        </Table>
        </div>
    )
  }
}

Todos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Todos);
