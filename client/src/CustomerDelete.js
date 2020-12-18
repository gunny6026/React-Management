import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class CustomerDelete extends Component  {
    constructor(props){
        super(props); 
        this.state={
            open : false
        }
    }
    handleClickOpen = ()=>{
        this.setState({
            open: true
        })
    }
    hadnleClose = () =>{
        this.setState({
           
            open: false
        })
    }

    deleteCustomer(id){
        const url = '/api/customers/'+id;
        fetch(url, {
            method: 'delete'
        });
        this.props.stateRefresh();
    }
    render(){
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                삭제</Button>
                <Dialog open={this.state.open} onClose={this.hadnleClose}>
                    <DialogTitle onClose={this.hadnleClose}>삭제 경고</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 정보가 삭제됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => this.deleteCustomer(this.props.id)}>
                            삭제</Button>
                            <Button variant="outlined" color="primary" onClick={(e) => this.hadnleClose(this.props.id)}>
                            삭제</Button>
                    </DialogActions>
                </Dialog>
        </div>
    );
};
}

export default CustomerDelete;