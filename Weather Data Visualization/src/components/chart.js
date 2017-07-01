// Data passed by parent caller, not Redux -> Component, not container
// Does not have its own editable state -> Function component, not class
import _ from 'lodash'
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) =>{
    
    function average(data){
        return _.round(_.sum(data)/data.length)
    }
    
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}></SparklinesLine>
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            
            <div>
                {average(props.data)} {props.units}
            </div>
        </div>
    )
}