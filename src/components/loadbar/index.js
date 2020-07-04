import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './loadbar.css';
import EventEmitter from 'events';
import { Dispatcher } from 'flux';
const dispatcher = new Dispatcher();
const NOTIFICATIONS_EVENT = "bc-react-loader";

export const setLoading = (status) =>{
    dispatcher.dispatch(status);
};

export const LoadBar = ({ render, component }) => {

    const [ loading, updateLoading ] = useState(false);
    const _updateLoading = (status) => updateLoading(status);
    useEffect(() => {
        store.on(NOTIFICATIONS_EVENT, _updateLoading)
        return () => store.removeListener(NOTIFICATIONS_EVENT, _updateLoading)
    },[])
        
        
    if(!loading) return null;
    if(render) return render(this.state);
    if(component){
        const Comp = this.props.component;
        return (<div className="load-content"><Comp style={this.props.style} {...this.state} /></div>);
    }
    return (<div className="load-bar">&nbsp;</div>);
}
LoadBar.propTypes = {
  render: PropTypes.func,
  style: PropTypes.object,
  component: PropTypes.node
};
LoadBar.defaultProps = {
   render: null,
   style: {},
   component: null
};


/**
 *      Store
 **/
class NotificationStore extends EventEmitter{
    constructor(){
        super();
        this.loading = false;
        dispatcher.register((status) => {
            this.loading = (status === "loading" || status === true);
            this.emit(NOTIFICATIONS_EVENT, this.loading);
        });
    }

    isLoading(){
        return this.loading;
    }
}
const store = new NotificationStore();