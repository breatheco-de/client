import React from "react"
import "./style.scss"
import PropTypes from 'prop-types'

const Indicator = ({children, type, history, height, width, color}) => {
    const Chart = types(history)["spark"]
    return <div className="indicator shadow-one rounded border border-light" style={{ width }}>
        <Chart height={height} color={color} />
        {children}
    </div>
} 

Indicator.propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    history: PropTypes.array,
    type: PropTypes.string,
    children: PropTypes.node,
};

Indicator.defaultProps = {
    color: "#BDBDBD",
    height: "73px",
    width: "150px",
    history: [],
    type: 'spark',
};

const types = (history) => {
    const width = 100 / history.length
    return {
        spark: ({ height, color }) => <>
            <span className="chart sparkline">
                {history.map((h,i) => <span key={i} className="index" style={{ width: `${width}%`, height }}><span className="count" style={{height: `${h}%`, background: color }}>(60,</span> </span>)}
            </span>
        </>
    }
}


export default Indicator