import React from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
const useStyles = (theme) => ({
  root: {
    minWidth: '70%',
    maxWidth: '70%',
    backgroundColor: '#f8f9f5',
    marginLeft: '15%',
    marginTop: '3%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})
class ViewSpell extends React.Component {
  constructor() {
    super()
    this.state = {
      spell: [],
    }
  }
  componentDidMount() {
    axios
      .get('https://spells-at-hogwarts.herokuapp.com/api/view/')
      .then((response) => {
        console.log(response)
        this.setState({
          spell: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        {this.state.spell.map((item) => {
          return (
            <div>
              <h1>New</h1>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    {item.name}
                  </Typography>
                  <br />
                  <h1>New</h1>
                  <Typography variant='body2' component='h5'>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>
    )
  }
}
export default withStyles(useStyles)(ViewSpell)
