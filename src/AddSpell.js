import React from "react";
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles =(theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    buttonStyle: {
        backgroundColor: "#537895",
        backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)",
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    inputStyle :{
        length : "200px"
    }
});
class AddSpell extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"",
            description:""
        }
    }
    SubmitData() {
        axios.post('https://spells-at-hogwarts.herokuapp.com/api/create/', { 
            name: this.state.name,
            description : this.state.description 
        })
            .then(response => {
                console.log(response.data)
                this.setState({
                    name:"",
                    description:""
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    handleChange(event){
        event.preventDefault();
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value });
    }
    handleSubmit() {
        this.SubmitData();
    }
    render() {
        const { classes } = this.props;
        return (
            <div style={{marginTop:"3%"}}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField required name="name" style = {{width:"500px"}}value={this.state.name} label="Add Spell Name" onChange={this.handleChange.bind(this)}/>
                    <br />
                    <TextField required name="Add Spell Description" style = {{width:"500px"}} value={this.state.description} onChange={this.handleChange.bind(this)} label="Description" />
                    <br />
                    <Button className={classes.buttonStyle} onClick={this.handleSubmit.bind(this)}> Submit</Button>
                </form>
            </div>
        )
    }
}
export default withStyles(useStyles)(AddSpell);